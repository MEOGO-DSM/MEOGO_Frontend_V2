import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";

const defaultLat = 36.351673;
const defaultLng = 127.386739;

export default function Map() {
  const [loading, setLoading] = useState<boolean>(false);
  const [addressData, setAddressData] = useState<{ x: number; y: number } | null>(null);
  const [mapHtml, setMapHtml] = useState<string>("");

  useEffect(() => {
    fetchAddress();
  }, []);

  useEffect(() => {
    if (addressData) {
      setMapHtml(generateMapHtml(addressData.y, addressData.x));
    } else {
      setMapHtml(generateMapHtml(defaultLat, defaultLng));
    }
  }, [addressData]);

  const generateMapHtml = (lat: number, lng: number) => `
    <html>
      <head>
        <meta charset="utf-8">
        <title>Map Marker</title>
      </head>
      <body>
        <div id="map" style="width:100%;height:100%;"></div>
        <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=3cb5256f693a6697bdf4629d45d1c7ad"></script>
        <script>
          let mapContainer = document.getElementById('map'),
          mapOption = { 
            center: new kakao.maps.LatLng(${lat}, ${lng}),
            level: 1
          };
          let map = new kakao.maps.Map(mapContainer, mapOption);
          
          let content = '<div class="label"><img src="https://github.com/user-attachments/assets/0d7524c6-7be1-4955-aad1-2899ad125261" width="100" height="105" /></div>'
        
          let markerPosition = new kakao.maps.LatLng(${lat}, ${lng}); 
          
          let customOverlay = new kakao.maps.CustomOverlay({
            position: markerPosition,
            content: content
          }); 
          customOverlay.setMap(map);

        </script>
      </body>
    </html>
  `;

  const fetchAddress = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.vworld.kr/req/address?service=address&request=getCoord&key=ED469AD5-7F76-3031-AB0C-06BCF40B4F14&type=ROAD&address=대전광역시 유성구 가정북로 76`);
      const data = await response.json();

      if (data?.response?.status === "OK") {
        const point = data.response.result.point;
        setAddressData(point);
      } else {
        console.warn("주소 데이터 오류:", data?.response?.error?.text || "오류 메시지가 제공되지 않았습니다");
      }
    } catch (error) {
      console.log("주소를 가져오는 데 실패했습니다:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <StyledWebView
        source={{ html: mapHtml }}
        javaScriptEnabled={true}
        originWhitelist={['*']}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('웹 뷰를 불러올 수 없습니다.', nativeEvent);
        }}
        onLoad={() => console.log('지도를 불러오고 있습니다.')}
      />
    </Container>
  );
}

const Container = styled.View`
width: 100%;
height: 180px;
border-radius: 8px;
overflow: hidden;
`;

const StyledWebView = styled(WebView)`
  flex: 1;
`;
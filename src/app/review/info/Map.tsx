import React from "react";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";

const html = `
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=3cb5256f693a6697bdf4629d45d1c7ad&libraries=services,clusterer,drawing"></script> 
    </head>
    <body style="margin:0;padding:0;">
        <div id="map" style="width:100%;height:180px;"></div>
        <script type="text/javascript">
            (function () {
                const container = document.getElementById('map')
                const options = { 
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                };
                
                const map = new kakao.maps.Map(container, options);

                const geocoder = new kakao.maps.services.Geocoder();
            })();
        </script>       
    </body>
</html>    
`;

export default function Map() {
  return (
    <Container>
      <StyledWebView
        source={{ html: html }}
        javaScriptEnabled={true}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        onLoad={() => console.log('WebView loaded')}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const StyledWebView = styled(WebView)`
  border-radius: 8px;
  background-color: transparent;
  flex: 1;
`;
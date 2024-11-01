import React from "react";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";

const statusMessage = "검색 중..."; // You can set the initial status here
const html = `
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=3cb5256f693a6697bdf4629d45d1c7ad&libraries=services,clusterer,drawing"></script> 
    </head>
    <body>
        <div id="map" style="width:100%;height:180px;"></div>
        <p id="status-message">${statusMessage}</p> <!-- Placeholder for status -->
        <script type="text/javascript">
            (function () {
                const container = document.getElementById('map');
                const options = { 
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                };
                
                const map = new kakao.maps.Map(container, options);
                const geocoder = new kakao.maps.services.Geocoder();
                const statusElement = document.getElementById('status-message'); // Get status element

                geocoder.addressSearch('대전광역시 유성구 가정북로 76', function(result, status) {
                    if (status === kakao.maps.services.Status.OK) {
                        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                        const marker = new kakao.maps.Marker({
                            map: map,
                            position: coords
                        });
                        map.setCenter(coords);

                        // Update status message
                        statusElement.innerText = 'Address found!';
                    } else {
                        const coords = new kakao.maps.LatLng(36.351673, 127.386739);
                        const marker = new kakao.maps.Marker({
                            map: map,
                            position: coords
                        });
                        map.setCenter(coords);

                        // Update status message
                        statusElement.innerText = 'Address not found, showing default location.';
                    }
                });
            })();
        </script>       
    </body>
</html>    
`;

// const html = `
// <html>
//     <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//         <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=3cb5256f693a6697bdf4629d45d1c7ad&libraries=services,clusterer,drawing"></script> 
//     </head>
//         <div id="map" style="width:100%;height:180px;"></div>
//         <p>`${status}`</p>
//         <script type="text/javascript">
//             (function () {
//                 const container = document.getElementById('map')
//                 const options = { 
//                     center: new kakao.maps.LatLng(33.450701, 126.570667),
//                     level: 3
//                 };
                
//                 const map = new kakao.maps.Map(container, options);

//                 const geocoder = new kakao.maps.services.Geocoder();

//                 geocoder.addressSearch('대전광역시 유성구 가정북로 76', function(result, status) {

//                    if (status === kakao.maps.services.Status.OK) {
              
//                       const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
              
//                       const marker = new kakao.maps.Marker({
//                           map: map,
//                           position: coords
//                       });
              
//                       map.setCenter(coords);
//                   } 
//                   else {
//                       const coords = new kakao.maps.LatLng(36.351673, 127.386739)

//                       const marker = new kakao.maps.Marker({
//                         map: map,
//                         position: coords
//                     });
            
//                     map.setCenter(coords);
//                   }
//               });    
//             })();
//         </script>       
//     </body>
// </html>    
// `;

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
# Korean-PGI_festival (국내 지리적 표시제 및 지역 축제 표시 사이트)

## 1. Introdution
This webpage shows Korea's major PGI & festivals. PGI means 'protected geographical indication'.

## 2. Steps
1) 기획
2) 지도 통합: Leaflet 또는 Google Maps JavaScript API 사용 -> Leaflet 사용
   - https://leafletjs.com/
3) 지역 정보 수집
   - 지리적 표시제 및 지역 축제: 이금섭 T 프린트
   - 위도 경도 표시: http://map.esran.com/
4) Coding
   - sample.js
   - index.html
5) 1차 웹 호스팅 및 배포: Github Pages 
   - 링크: https://hyeeunkim07.github.io/Korean-PGI_festival/
6) Code reviewing & refactoring
7) 2차 배포

## 3. Access link
https://hyeeunkim07.github.io/Korean-PGI_festival/

## 4. How to view the site
1) Click the link below;
https://hyeeunkim07.github.io/Korean-PGI_festival/
2) If you click the marker, information will show up.
3) If you want to zoom in, click + button. If you want to zoom out, click - button.

## 5. References
- https://leafletjs.com/
- http://map.esran.com/
- https://velog.io/@commi1106/Github-Pages%EB%A1%9C-HTML-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0

## 6. Supplyment
- map size (in mobile version; iOS, Android)
- bigger pont size
- click the marker -> show festival's website

## 7. R -ing
1. 지도 사이즈 수정, 반응형 (모바일 / PC)
   - https://stickode.tistory.com/157
   - https://mediaqueri.es/
   - https://developer.mozilla.org/ko/docs/Web/CSS/CSS_media_queries/Using_media_querie (미디어쿼리)
   - https://cocoder16.tistory.com/37
   - 멘토님
   - 크롬에서 개발자도구(F12) 열고 Ctrl + Shift + C를 클릭하거나 사진에서 빨간색 네모 부분 클릭하면 마우스로 화면에 있는 요소(Element)들을 선택할 수 있어요. maker 클릭하면 popup이 뜨는데 그 부분에 마우스를 갖다대면 요소의 정보가 나와요. 파란색 네모 부분에 div.leaflet-popup-content라고 되어있는데 이 부분은 div태그면서 class가 leaflet-popup-content라는 뜻입니다.
https://www.w3schools.com/cssref/pr_font_font-size.php
이 사이트 참고하거나 div font size로 검색해보면 도움이 될 것 같아요!
2. 폰트 사이즈 키우기
- 링크는 <a>태그 사용하면 됩니다! 사용법은 https://www.w3schools.com/tags/tag_a.asp 참고하거나 a tag로 검색해보면 나와요.
- 
지금 popupContent: '부산광역시 - 동래읍성역사축제' 이런 식으로 되어있는데
popupContent: '부산광역시 - 동래읍성역사축제 <a></a>'
이런식으로 내용쓴 부분에 <a> 태그를 추가하면 돼요.
 
a tag에 링크 주소만 추가하면 클릭했을 때 지도가 열려있던 탭에서 링크로 이동하는데,
새탭에서 열리게 하려면 속성(attribute)을 추가하면 돼요
제가 알려준 사이트에도 나와있고 a 태그 새탭으로 검색해봐도 나올거예요!
4. marker 클릭시 축제 웹사이트 또는 특산물 판매 사이트 연결 (없는 건 그 지역 시청/군청 사이트 연결)
- https://stackoverflow.com/questions/66572730/how-to-show-an-image-and-a-link-on-a-popup-when-clicking-on-a-leaflet-marker

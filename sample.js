var map = L.map('map').setView([37.5, 126.5], 7);

L.tileLayer('https://tiles.osm.kr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 적는 법 {latling: [위도, 경도], popupContent: '이름'}
// 위도 경도 다시 체크 해야함....
// 에헤이 조졋네 이거
// http://map.esran.com/
var markers = [
    //서울 및 경기도
    {latlng: [37.59507908239112, 127.02286181376326], popupContent: '서울특별시 성북구 - 성북다문화음식축제'},
    {latlng: [37.51746390694027, 127.11857945016345], popupContent: '서울특별시 송파구 - 한성백제문화제'},
    {latlng: [37.614793025380756, 126.7224940168535], popupContent: '경기도 김포시 - 김포 쌀'},
    {latlng: [37.45559292997296, 126.70282970505994], popupContent: '인천광역시 - 인천 펜타포트 축제'},
    {latlng: [37.747778939981785, 126.48671734440585], popupContent: '경기도 강화군 - 강화 약쑥'},
    {latlng: [37.29912915179103, 127.63750911828814], popupContent: '경기도 여주시 - 여주 쌀, 여주오곡나루축제'},
    {latlng: [37.264815775824054, 127.44962769343665], popupContent: '경기도 이천시 - 이천 쌀, 이천쌀문화축제'},
    //강원도
    {latlng: [38.14922900606689, 127.30824507652176], popupContent: '강원도 철원군 - 철원 쌀'},
    {latlng: [38.1065896551385, 127.703568780381], popupContent: '강원도 화천군 - 화천산천어축제'},
    {latlng: [38.383102618386296, 128.473852023994], popupContent: '강원도 고성군 - 강원고성명태축제'},
    {latlng: [38.07799362689874, 128.61503876832498], popupContent: '강원도 양양군 - 양양 송이'},
    {latlng: [37.864151031968106, 127.74780502880344], popupContent: '강원도 춘천시 - 춘천국제마임축제'},
    {latlng: [37.69599354834061, 127.8839873934837], popupContent: '강원도 홍천군 - 홍천 찰옥수수'},
    {latlng: [37.49454907781831, 127.98292485378869], popupContent: '강원도 횡성군 - 횡성 한우고기'},
    {latlng: [37.371659526740444, 128.39169745562444], popupContent: '강원도 평창군 - 평창효석문화제'},
    {latlng: [37.494708570817366, 128.53581544531434], popupContent: '강원도 평창군 진부면 - 진부 당귀'},
    {latlng: [37.38577266182911, 128.6607677359983], popupContent: '강원도 정선군 - 정선 찰옥수수, 정선 황기'},
    //충청북도
    {latlng: [36.990141267330905, 127.92751136567914], popupContent: '충청북도 충주시 - 충주 사과, 충주세계무술축제'},
    {latlng: [36.81935531575413, 127.77911890056025], popupContent: '충청북도 괴산군 - 괴산 고추, 괴산 고춧가루, 괴산고추축제'},
    {latlng: [36.35124984699738, 127.38513913863056], popupContent: '대전광역시 - 대전효문화뿌리축제'},
    //충청남도
    {latlng: [36.990141267330905, 127.92751136567914], popupContent: '충청남도 서산시 - 서산 마늘'},
    {latlng: [36.81935531575413, 127.77911890056025], popupContent: '충청남도 공주시 정안면 - 정안 밤'},
    {latlng: [36.35124984699738, 127.38513913863056], popupContent: '충청남도 서산시 해미면 - 해미읍성역사체험축제'},
    {latlng: [36.990141267330905, 127.92751136567914], popupContent: '충청남도 홍성군 - 홍성역사인물축제'},
    {latlng: [36.81935531575413, 127.77911890056025], popupContent: '충청남도 청양군 - 청양 구기자'},
    {latlng: [36.35124984699738, 127.38513913863056], popupContent: '충청남도 부여군 - 부여서동연꽃축제'},
    {latlng: [36.990141267330905, 127.92751136567914], popupContent: '충청남도 서천군 한산면 - 한산 모시, 한산모시문화제'},
    {latlng: [36.81935531575413, 127.77911890056025], popupContent: '충청남도 논산시 - 강경젓갈축제'},
    {latlng: [36.35124984699738, 127.38513913863056], popupContent: '충청남도 금산군 - 금강여울축제'},
    //전라북도

    //전라남도
    
    //경상북도

    //경상남도

    //제주도
    {latlng: [33.34441844164841, 126.44735686733691], popupContent: '제주도 - 제주 돼지고기, 제주들불축제, 도두오래물축제'},
    //울릉도
    {latlng: [36.35124984699738, 127.38513913863056], popupContent: '울릉도 - 삼나물, 미역취, 참고비, 부지갱이'},
];

markers.forEach(function(markerInfo) {
    var marker = L.marker(markerInfo.latlng).addTo(map);
    marker.bindPopup(markerInfo.popupContent);
});

map.on('click', function (e) {
    updateInfoPanel(e.latlng);
});

function updateInfoPanel(latlng) {
    // 클릭한 위치의 위도와 경도 업데이트
    document.getElementById('latitude').textContent = latlng.lat.toFixed(6);
    document.getElementById('longitude').textContent = latlng.lng.toFixed(6);

    // 클릭한 위치의 주소를 지오코딩을 통해 가져오기 (OpenCage Geocoder 사용)
    fetch('https://api.opencagedata.com/geocode/v1/json?q=' + latlng.lat + '+' + latlng.lng + '&key=YOUR_OPENCAGE_API_KEY')
        .then(response => response.json())
        .then(data => {
            const address = data.results[0].formatted;
            document.getElementById('address').textContent = address;
        })
        .catch(error => {
            console.error('Error fetching address:', error);
        });
}

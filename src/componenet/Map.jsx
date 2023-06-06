
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Info from './Info';



// import makeOutListener,makeOutListener from kakao;


function Map() {
  const mapContainer = document.getElementById('map');
  const { kakao } = window;
  const [showComponent, setShowComponent] = useState(false);
  const onClickInfo = () => {
    setShowComponent(!showComponent);
  }

  //철용 아조씨의 집 .. 
  const showInfo = () => {
    console.log('버튼 눌렀음 ')
    // 컨텐츠 업데이트를 위한 JavaScript 코드

  };



  // const infowindowContainer = document.createElement('div');
  // ReactDOM.render(infowindowContent, infowindowContainer);
  // console.log(infowindowContent.innerHTML)

  // 10개의 가구 표현하기 
  const positions = [
    {
      title: '1',
      content: '<div>이름 1 </div>',
      latlng: new window.kakao.maps.LatLng(37.62578434368115, 126.83505317442281),
      text: '제발쫌 떠라'
    },
    {
      title: '2',
      content: '<div className = "info-name">이름 2 </div>',
      latlng: new window.kakao.maps.LatLng(37.62374572781253, 126.83820960329132)
    },
    {
      title: '김옥지',
      content: '<div class="wrap" style="opacity: 0.7;background-color: rgb(125, 206, 160); padding: 5px; border-raduis : 3px">' +
        '    <div class="info" style = "background-color: #fff ; padding: 2px; border-radius : 5px">' +
        '        <div class="title" style = "font-weight:800; font-size :20px ; text-align : left" >' +
        '            김옥지' +
        '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body" style = "font-size : 15px; color : #515151">' +
        '            <div class="img">' +
        '                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYLg0PwT4cb-64qFB1kBr9Gk9sN6K_FD8jw&usqp=CAU" width="73" height="70">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="ellipsis">경기도 고양시 충장로 145-7  </div>' +
        '                <div class="jibun ellipsis">(우)10123(지번)행신동 439</div>' +
        '            </div>' +
        '<div >' +
        '<a style="text-decoration: none; color: #000; display: inline-block; padding: 10px 13px; background-color: rgb(125, 206, 160); border: none; border-radius : 5px;cursor: pointer;" href="tel:010-0000-0000">응급실 연결</a>' +
        '  <a style=" text-decoration: none; color : #000;padding: 10px 13px; background-color: rgb(125, 206, 160);border: none; border-radius : 5px;cursor: pointer;" href="tel:010-0000-0000">보호자 연결</a>' +
        '</div>' +
        '        </div>' +
        '    </div>' +
        '</div>',
      latlng: new window.kakao.maps.LatLng(37.62606619951969, 126.83688769120405)

    },
    {
      title: '김두칠',
      content: '<div class="wrap" style="opacity: 0.7;background-color: rgb(125, 206, 160); padding: 5px; border-raduis : 3px">' +
        '    <div class="info" style = "background-color: #fff ; padding: 2px; border-radius : 5px">' +
        '        <div class="title" style = "font-weight:800; font-size :20px ; text-align : left" >' +
        '            김두칠' +
        '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body" style = "font-size : 15px; color : #515151">' +
        '            <div class="img">' +
        '                <img src="data:image/jpeg;base64,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" width="73" height="70">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="ellipsis">경기도 고양시 충장로 145-7  </div>' +
        '                <div class="jibun ellipsis">(우)10123(지번)행신동 439</div>' +
        '            </div>' +
        '<div >' +
        '<a style="text-decoration: none; color: #000; display: inline-block; padding: 10px 13px; background-color: rgb(125, 206, 160); border: none; border-radius : 5px;cursor: pointer;" href="tel:010-0000-0000">응급실 연결</a>' +
        '  <a style=" text-decoration: none; color : #000;padding: 10px 13px; background-color: rgb(125, 206, 160);border: none; border-radius : 5px;cursor: pointer;" href="tel:010-0000-0000">보호자 연결</a>' +
        '</div>' +
        '        </div>' +
        '    </div>' +
        '</div>',
      latlng: new window.kakao.maps.LatLng(37.62548357779588, 126.83908658356567)
    },
    {
      title: '5',
      content: '<div>이름 5 </div>',
      latlng: new window.kakao.maps.LatLng(37.6264854895889, 126.83389616029035)
    },
    {
      title: '6',
      content: '<div>이름 6 </div>',
      latlng: new window.kakao.maps.LatLng(37.62360629854891, 126.84338380948888)
    },
    {
      title: '7',
      content: '<div>이름 7 </div>',
      latlng: new window.kakao.maps.LatLng(37.623852874228405, 126.83266730051372)
    },
    {
      title: '8',
      content: '<div>이름 8 </div>',
      latlng: new window.kakao.maps.LatLng(37.626876070512836, 126.84277655725222)
    },
    {
      title: '허숙희',
      content: '<div class="wrap" style="background-color: #F9E79F ; padding: 5px; border-raduis : 3px">' +
        '    <div class="info" style = "background-color: #fff; padding: 2px; border-radius : 5px">' +
        '        <div class="title" style = "font-weight:800; font-size :20px ; text-align : left" >' +
        '            허숙희' +
        '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body" style = "font-size : 15px; color : #515151">' +
        '            <div class="img">' +
        '                <img src="https://cdn-icons-png.flaticon.com/512/781/781247.png" width="73" height="70">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="ellipsis">경기도 고양시 충장로 152-3 </div>' +
        '                <div class="jibun ellipsis">(우)10123 (지번)행신동 435</div>' +
        '            </div>' +
        '<div >' +
        '<a style="text-decoration: none; color: #000; display: inline-block; padding: 10px 13px; background-color: #F9E79F ; border: none; border-radius:5px; cursor: pointer;" href="tel:010-0000-0000">응급실 연결</a>' +
        '  <a style=" text-decoration: none; color : #000;padding: 10px 13px; background-color: #F9E79F ; border: none; border-radius:5px;cursor: pointer;" href="tel:010-0000-0000">보호자 연결</a>' +
        '</div>' +
        '        </div>' +
        '    </div>' +
        '</div>',
      latlng: new window.kakao.maps.LatLng(37.624703309583865, 126.83678022308682)
    },
    {
      title: '곽철용',
      // content: infowindowContent.innerHTML,
      content: '<div class="wrap" style="background-color: #EC7063; padding: 5px; border-raduis : 3px">' +
        '    <div class="info" style = "background-color: #fff; padding: 2px; border-radius : 5px">' +
        '        <div class="title" style = "font-weight:800; font-size :20px ; text-align : left" >' +
        '            곽철용' +
        '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body" style = "font-size : 15px; color : #515151">' +
        '            <div class="img">' +
        '                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc81BQx%2Fbtsis1uZnZL%2Fg1AhI6iSDJ2AhkdVENMKhK%2Fimg.png" width="73" height="70">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="ellipsis">경기도 고양시 충장로 152-3 </div>' +
        '                <div class="jibun ellipsis">(우)10123 (지번)행신동 435</div>' +
        '            </div>' +
        '<div >' +
        '<a style="text-decoration: none; color: #fff; display: inline-block; padding: 10px 13px; background-color: #EC7063; border: none; border-radius : 5px; cursor: pointer;" href="tel:010-0000-0000">응급실 연결</a>' +
        '  <a style=" text-decoration: none; color : #fff;padding: 10px 13px; background-color: #EC7063; border: none; border-radius : 5px; cursor: pointer;" href="tel:010-0000-0000">보호자 연결</a>' +
        '</div>' +
        '        </div>' +
        '    </div>' +
        '</div>',

      latlng: new window.kakao.maps.LatLng(37.6250607595023, 126.83791222849925)
    },

  ];

  useEffect(() => {


    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=d61cb09f4fbe0af6002abdfd310b9102';
    document.head.appendChild(script);

    script.onload = () => {
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.625524905926575, 126.838013172107),
        level: 3
      };

      const map = new window.kakao.maps.Map(document.getElementById('map'), mapOption, mapContainer);



      const NomalimageSrc =
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzvH1G%2FbtsgkirVxgM%2F8hFxPRgsbxBYTk7KtS7Oi1%2Fimg.png';
      const imageSize = new window.kakao.maps.Size(50, 50);
      const NomalmarkerImage = new window.kakao.maps.MarkerImage(NomalimageSrc, imageSize);

      for (let i = 0; i < 6; i++) {
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: positions[i].latlng,
          title: positions[i].title,
          image: NomalmarkerImage,

        });
        const infowindow = new kakao.maps.InfoWindow({
          content: positions[i].content,
          removable: true
        })

        kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });



      }

      const CautionimgSrc =
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbFnHUu%2FbtsgmEAr6Dv%2FNOzsQNBxrqadUat55yNQdk%2Fimg.png';
      const CautionmarkerImage = new window.kakao.maps.MarkerImage(CautionimgSrc, imageSize);
      for (let i = 6; i < 9; i++) {
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: positions[i].latlng,
          title: positions[i].title,
          image: CautionmarkerImage
        });
        const infowindow = new kakao.maps.InfoWindow({
          content: positions[i].content,
          clickable: true,
          removable: true
        })

        kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });

      }

      const WarningimgSrc =
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FImpwk%2FbtsglzfhZio%2FzDo1cJ2JyCttr5ANIXH7g1%2Fimg.png'
      const WarningmarkerImage = new window.kakao.maps.MarkerImage(WarningimgSrc, imageSize);
      for (let i = 9; i < 10; i++) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: positions[i].latlng,
          title: positions[i].title,
          image: WarningmarkerImage
        })

        const infowindow = new kakao.maps.InfoWindow({

          content: positions[i].content,
          removable: true
        })

        kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });

      }




    };

  }, []);



  return <div id="map"
    ref={mapContainer}
    style={{ width: '100%', height: '700px', display: 'block' }}>;
    <div>
      {showComponent && <Info />}
    </div>
  </div>
}

export default Map;
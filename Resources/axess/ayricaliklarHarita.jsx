import React from 'react';

const ayricaliklarHarita = () => {
  return (
    <>
  <div className="overlay" />
  <header id="header">
    <div className="container">
      <div className="sub-header">
        <ul>
          <li>
            <a href="javascript:;"><span className="icon-card3" />Kart İşlemlerim</a>
          </li>
          <li>
            <a href="javascript:;"><span className="icon-search2" />Ara</a>
          </li>
        </ul>
      </div>
      <div className="header">
        <div className="mobile-menu-btn">
          <a href="javascript:;">
            <span className="icon-tumu" />
          </a>
          {/*Bu buton mobil menuyu acmak icindir. Mobil menuyu gorunur yapmak icin <div class="menu"> buraya active classi ekletmek gerekiyor.*/}
        </div>
        <div className="logo">
          <a href="javascript:;"><img src="img/logo.svg" alt="Axess Wings" /></a>
        </div>
        <div className="mobile-search-btn">
          <a href="javascript:;"><span className="icon-search2" /></a>
          {/*Bu buton mobil searchi acmak icindir. Ama bunu acmak icin yine Mobil menuyu gorunur yapmak gerekiyor. <div class="menu"> buraya active classi ekleyin.*/}
        </div>
        <div className="menu">
          <div className="mobile-search">
            <div className="mobile-search-input">
              <input type="text" placeholder="Aranacak kelimeyi girin" />
              <button><span className="icon-search2" /></button>
            </div>
          </div>
          <ul>
            <li>
              <a href="javascript:;">MİL PUAN</a>
              <div className="mega-dropdown-container">
                <div className="mega-dropdown-content">
                  <div className="mega-dropdown-menu">
                    <div className="mega-dropdown-menu-item">
                      <h4>MİL PUAN</h4>
                      <ul>
                        <li><a href="javascript:;">Kaç mil puan kazanırım?</a></li>
                        <li><a href="javascript:;">Kaç mil puan kazanırım?</a></li>
                        <li><a href="javascript:;">Nasıl mil puan kazanırım?</a></li>
                        <li><a href="javascript:;">Mil puanları nerede kullanabilirim?</a></li>
                        <li><a href="javascript:;">Avans mil puan</a></li>
                      </ul>
                    </div>										
                  </div>
                  <div className="mega-dropdown-box">
                    <div className="dropdown-privileges-item">
                      <div className="dropdown-privileges-item-content">
                        <a href="javascript:;">100’DEN FAZLA <br />KAMPANYA
                          <span className="icon-arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-privileges-item">
                      <div className="dropdown-privileges-item-content">
                        <a href="javascript:;">100’DEN FAZLA <br />KAMPANYA
                          <span className="icon-arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-privileges-item">
                      <div className="dropdown-privileges-item-content">
                        <a href="javascript:;">100’DEN FAZLA <br />KAMPANYA
                          <span className="icon-arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-privileges-item">
                      <div className="dropdown-privileges-item-content">
                        <a href="javascript:;">100’DEN FAZLA <br />KAMPANYA
                          <span className="icon-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mega-dropdown-info">
                  <a href="javascript:;">Mil puanlarla ilgili daha fazla bilgi almak için tıklayınız. <span className="icon-arrow" /></a>
                </div>
              </div>
            </li>
            <li><a href="javascript:;">AYRICALIKLAR</a></li>
            <li><a href="javascript:;">KAMPANYALAR</a></li>
            <li><a href="javascript:;">KARTLAR</a></li>
            <li><a href="javascript:;">BLOG</a></li>
          </ul>
          <a href="javascript:;" className="btn btn--bordered-yellow">AXESS MOBIL</a>
          <a href="javascript:;" className="btn btn--primary">HEMEN BAŞVUR</a>
        </div>
      </div>
    </div>
  </header>
  <section id="content">
    <div className="subpage">
      <div className="hero-area-container">
        <img src="img/privileges-image.jpg" />
        <div className="hero-area">
          <h1>AYRICALIKLAR</h1>
          <ul>
            <li><a href="javascript:;">ALIŞVERİŞ AYRICALIKLARI</a></li>
            <li><a href="javascript:;">SAĞLIK - SPOR AYRICALIKLARI</a></li>
            <li><a href="javascript:;">SEYEHAT AYRICALIKLARI</a></li>
            <li><a href="javascript:;">RESTORAN AYRICALIKLARI</a></li>
          </ul>
        </div>
      </div>
      <div className="privileges-list">
        <div className="privileges-list-filter">
          <div className="privileges-dropdown-filter"><span className="icon-search"><span className="path1" /><span className="path2" /><span className="path3" /></span></div>
          <div className="privileges-map-buttons">
            <a href="javascript:;" className="active">Haritada Göster</a>
            <a href="javascript:;">Panoda Göster</a>
          </div>
        </div>
        <div className="privileges-map">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.049014719077!2d29.388581551232082!3d40.87079853572019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad9219b026333%3A0xa0a08196babaddab!2sAkbank%20Abm%20%C5%9Eubesi!5e0!3m2!1str!2str!4v1613493205116!5m2!1str!2str" width="100%" height={659} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
          </div>
        </div>
      </div>
      <div className="wings-card-container">
        <div className="wings-card">
          <img src="img/wings-card.png" />
          <h2>BU AYRICALIKLARDAN <br />YARARLANMAK İÇİN HEMEN <br />BİR WİNGS SAHİBİ OLUN!</h2>
          <a href="javascript:;" className="btn btn--secondary">HEMEN BAŞVUR</a>
        </div>
      </div>
    </div>		
  </section>
  <footer id="footer">
    <div className="container">
      <div className="footer-menu">
        <div className="footer-menu-item">
          <h4><a href="javascript:;">KAMPANYALAR <span className="icon-arti" /> <span className="icon-sour" /></a></h4>
          <ul>
            <li><a href="javascript:;">Tüm Kampanyalar</a></li>
          </ul>
        </div>
        <div className="footer-menu-item active">
          <h4><a href="javascript:;">WINGS KART <span className="icon-arti" /> <span className="icon-sour" /></a></h4>
          <ul>
            <li><a href="javascript:;">Kart Özellikleri</a></li>
            <li><a href="javascript:;">Faiz ve Ücretler</a></li>
            <li><a href="javascript:;">Kampanyalar</a></li>
            <li><a href="javascript:;">Mil Puan</a></li>
            <li><a href="javascript:;">Merak Ettikleriniz</a></li>
          </ul>
        </div>
        <div className="footer-menu-item">
          <h4><a href="javascript:;">WINGS AYRICALIKLARI <span className="icon-arti" /> <span className="icon-sour" /></a></h4>
          <ul>
            <li><a href="javascript:;">Tüm Wings Ayrıcalıkları</a></li>
          </ul>
        </div>
        <div className="footer-menu-item">
          <h4><a href="javascript:;">MERAK ETTİKLERİNİZ <span className="icon-arti" /> <span className="icon-sour" /></a></h4>
          <ul>
            <li><a href="javascript:;">Sıkça Sorulanlar</a></li>
            <li><a href="javascript:;">Bankacılık İşlemleri</a></li>
            <li><a href="javascript:;">Faiz ve İşlem Ücretleri</a></li>
          </ul>
        </div>
        <div className="footer-menu-item">
          <h4><a href="javascript:;">MİL PROGRAMI <span className="icon-arti" /> <span className="icon-sour" /></a> </h4>
          <ul>
            <li><a href="javascript:;">Ne Kadar Mil Puan Kazanırım?</a></li>
            <li><a href="javascript:;">Ne Kadar Mil Puanım Var?</a></li>
            <li><a href="javascript:;">Nasıl Mil Puan Kazanırım?</a></li>
            <li><a href="javascript:;">Mil Puanları Nerede Kullanabilirm?</a></li>
            <li><a href="javascript:;">Avans Mil Puan</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <div className="footer-social-media">
          <h4>BİZİ TAKİP EDİN</h4>
          <ul>
            <li>
              <a href="javascript:;">
                <img src="img/twitter.svg" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="img/facebook.svg" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="img/instagram.svg" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>FIRSATLARI KAÇIRMAMAK İÇİN<br /> E-BÜLTENİMİZE ABONE OLUN</h4>
          <div className="newsletter">
            <form>
              <div className="newsletter__input">
                <input type="email" className="error" placeholder="E-posta adresinizi girin" />
                <span className="icon-warning"><span className="path1" /><span className="path2" /></span>
                <div className="newsletter__error-message">Lütfen geçerli bir mail adresi giriniz.</div>
              </div>
              <button type="submit" className="btn btn--primary">KAYDOL</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom-menu">
        <ul>
          <li><a href="javascript:;">İletişim</a></li>
          <li><a href="javascript:;">Gizlilik Bildirimi</a></li>
          <li><a href="javascript:;">Web Sitesi Kullanıcı Sözleşmesi</a></li>
          <li><a href="javascript:;">Çerez Politikası</a></li>
        </ul>
        <div className="copyright">
          © 2017 Wings
        </div>
      </div>
    </div>
  </footer>
</>

  );
};

export default ayricaliklarHarita;
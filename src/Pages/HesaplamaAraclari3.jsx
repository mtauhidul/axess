/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const HesaplamaAraclari3 = () => {
    return (
        <>
            <div className="overlay" />
            <Header />
            <section id="content">
                <div className="subpage">
                    <div className="subpage-content">
                        <div className="breadcrumb">
                            <ul>
                                <li className="active">
                                    <a href="/">AYRICALIKLAR</a>
                                </li>
                                <li>
                                    <a href="/">GİYİM</a>
                                </li>
                            </ul>
                        </div>
                        <div className="privileges-details">
                            <div className="row">
                                <div className="privileges-detail-image">
                                    <img src="img/ayr-cal-k-1.jpg" />
                                    <div className="wings-box-logo">
                                        <img src="img/logo.svg" />
                                    </div>
                                    <div className="wings-box-item-logo">
                                        <img src="img/privilages-logo.svg" />
                                    </div>
                                </div>
                                <div className="privileges-detail-content">
                                    <h1>Zorlu Cantinery'de %10 İndirim Ayrıcalığı</h1>
                                    <p>
                                        Tüm Lacoste magazalarında gömlek ve tisört ürünlerinde pesin
                                        fiyatına 6 taksit, Ayakkabı ürünlerinde 12 aya varan taksit
                                        imkanı
                                    </p>
                                    <a href="/" className="btn btn--bordered-blue">
                                        YOL TARİFİ AL
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="container-mobile">
                            <div className="tab-container">
                                <div className="tab-item">
                                    <a href="/">Ayrıcalık Bilgileri</a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">Ayrıcalık Detayları</a>
                                </div>
                                <div className="tab-item active">
                                    <a href="/">Hesaplama Araçları</a>
                                </div>
                            </div>
                            <div className="tab-detail-container">
                                <div className="tab-detail-item">
                                    <h2>KAÇ MİL PUAN KAZANIRIM?</h2>
                                    <div className="calculator-container">
                                        <div className="calculator">
                                            <div className="calculator-form">
                                                <div className="calculator-item">
                                                    <label>Tutar</label>
                                                    <div className="calculator-form-item">
                                                        <select>
                                                            <option value disabled selected>
                                                                Seçiniz
                                                            </option>
                                                            <option value={1000}>1.000 TL</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="calculator-item">
                                                    <label>&nbsp;</label>
                                                    <div className="calculator-form-item">
                                                        <select>
                                                            <option value disabled selected>
                                                                Seçiniz
                                                            </option>
                                                            <option value="yurticiakbank">
                                                                Yurt İçi (Akbank)
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="calculator-item">
                                                    <label>Vade</label>
                                                    <div className="calculator-form-item">
                                                        <select>
                                                            <option value disabled selected>
                                                                Seçiniz
                                                            </option>
                                                            <option value={20}>20</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="calculator-result">
                                                <div>
                                                    <h3>Faiz Tutarı</h3>
                                                    <div className="calculated-point">5,04 TL</div>
                                                </div>
                                                <div>
                                                    <h3>İş Tutarı</h3>
                                                    <div className="calculated-point">5,25 TL</div>
                                                </div>
                                                <div>
                                                    <h3>Taksit Tutarı</h3>
                                                    <div className="calculated-point">
                                                        510,04 TL
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="calculator-payment-plan-container">
                                            <a href="/" className="btn--inline">
                                                ÖDEME PLANINI GÖSTER
                                            </a>
                                            <div className="calculator-payment-plan">
                                                <h2>ÖDEME PLANI</h2>
                                                <div className="calculator-payment-plan-scroll">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th>Dönem</th>
                                                                <th>Taksit Tutarı</th>
                                                                <th>Anapara Ödemesi</th>
                                                                <th>Faiz Ödemesi</th>
                                                                <th>KKDF</th>
                                                                <th>BSMV</th>
                                                                <th>Kalan Anapara</th>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1.766,03 TL</td>
                                                                <td>1.598,03 TL</td>
                                                                <td>140,00 TL</td>
                                                                <td>21,00 TL</td>
                                                                <td>7,00 TL</td>
                                                                <td>8.401,97 TL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1.766,03 TL</td>
                                                                <td>1.598,03 TL</td>
                                                                <td>140,00 TL</td>
                                                                <td>21,00 TL</td>
                                                                <td>7,00 TL</td>
                                                                <td>8.401,97 TL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1.766,03 TL</td>
                                                                <td>1.598,03 TL</td>
                                                                <td>140,00 TL</td>
                                                                <td>21,00 TL</td>
                                                                <td>7,00 TL</td>
                                                                <td>8.401,97 TL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1.766,03 TL</td>
                                                                <td>1.598,03 TL</td>
                                                                <td>140,00 TL</td>
                                                                <td>21,00 TL</td>
                                                                <td>7,00 TL</td>
                                                                <td>8.401,97 TL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1.766,03 TL</td>
                                                                <td>1.598,03 TL</td>
                                                                <td>140,00 TL</td>
                                                                <td>21,00 TL</td>
                                                                <td>7,00 TL</td>
                                                                <td>8.401,97 TL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1.766,03 TL</td>
                                                                <td>1.598,03 TL</td>
                                                                <td>140,00 TL</td>
                                                                <td>21,00 TL</td>
                                                                <td>7,00 TL</td>
                                                                <td>8.401,97 TL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>TOPLAM</td>
                                                                <td>10.766,03 TL</td>
                                                                <td>10.598,03 TL</td>
                                                                <td>440,00 TL</td>
                                                                <td>74,00 TL</td>
                                                                <td>24,00 TL</td>
                                                                <td>0,00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <blockquote>
                                                    *Aylık taksit tutarına KKDF ve BSMV dahildir.
                                                </blockquote>
                                            </div>
                                            <a href="/" className="btn--inline">
                                                ÖDEME PLANINI GİZLE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wings-box wings-box--logo-grey">
                        <h4>İLGİNİZİ ÇEKEBİLECEK</h4>
                        <h2>DİĞER AYRICALIKLAR</h2>
                        <div className="row">
                            <div className="wings-box-item">
                                <div className="wings-box-item-container">
                                    <div className="wings-box-item-image">
                                        <a href="/">
                                            <img src="img/ayr-cal-k-1.jpg" />
                                            <div className="wings-box-logo">
                                                <img src="img/logo.svg" />
                                            </div>
                                            <div className="wings-box-item-logo">
                                                <img src="img/privilages-logo.svg" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="wings-box-item-content">
                                        <a href="/">Wings’e Özel Network’te 50 TL Chip-Para</a>
                                        <span className="wings-box-item-category">ALIŞVERİŞ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="wings-box-item">
                                <div className="wings-box-item-container">
                                    <div className="wings-box-item-image">
                                        <a href="/">
                                            <img src="img/ayr-cal-k-1.jpg" />
                                            <div className="wings-box-logo">
                                                <img src="img/logo.svg" />
                                            </div>
                                            <div className="wings-box-item-logo">
                                                <img src="img/privilages-logo.svg" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="wings-box-item-content">
                                        <a href="/">Wings’e Özel Network’te 50 TL Chip-Para</a>
                                        <span className="wings-box-item-category">ALIŞVERİŞ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="wings-box-item">
                                <div className="wings-box-item-container">
                                    <div className="wings-box-item-image">
                                        <a href="/">
                                            <img src="img/ayr-cal-k-1.jpg" />
                                            <div className="wings-box-logo">
                                                <img src="img/logo.svg" />
                                            </div>
                                            <div className="wings-box-item-logo">
                                                <img src="img/privilages-logo.svg" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="wings-box-item-content">
                                        <a href="/">Wings’e Özel Network’te 50 TL Chip-Para</a>
                                        <span className="wings-box-item-category">ALIŞVERİŞ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/" className="btn btn--bordered-blue">
                            TÜMÜNÜ GÖR
                        </a>
                    </div>
                    <div className="wings-card-container">
                        <div className="wings-card">
                            <img src="img/wings-card.png" />
                            <h2>
                                BU AYRICALIKLARDAN <br />
                                YARARLANMAK İÇİN HEMEN <br />
                                BİR WİNGS SAHİBİ OLUN!
                            </h2>
                            <a href="/" className="btn btn--secondary">
                                HEMEN BAŞVUR
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default HesaplamaAraclari3;

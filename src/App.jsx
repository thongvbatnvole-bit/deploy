import { caNhan, ungDung } from './thongtin.js'

function TheUngDung({ app }) {
  const ngoai = app.link.startsWith('http')
  return (
    <a className="app" href={app.link} {...(ngoai ? { target: '_blank', rel: 'noopener' } : {})}>
      <div className="app-dau">
        <span className="app-icon" aria-hidden="true">
          <img src="/brand/agribank_bieu_tuong.svg" alt="" />
        </span>
        {app.nhan && <span className="app-nhan">{app.nhan}</span>}
      </div>
      <h3>{app.ten}</h3>
      <p>{app.moTa}</p>
      <span className="app-mo">Mở ứng dụng <span aria-hidden="true">→</span></span>
    </a>
  )
}

export default function App() {
  return (
    <>
      <header className="dau-trang">
        <div className="khung dau-trang-trong">
          <a href="#" className="logo-khoi" aria-label="Trang chủ">
            <img src="/brand/agribank_logo_chuan.svg" alt="Agribank" className="logo" />
            <span className="ten-chi-nhanh">CHI NHÁNH TÂY NINH</span>
          </a>
          <nav className="menu">
            <a href="#gioi-thieu">Giới thiệu</a>
            <a href="#mang-luoi">Mạng lưới</a>
            <a href="#ung-dung">Ứng dụng</a>
            <a href="#lien-he">Liên hệ</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="gioi-thieu">
          <div className="khung hero-trong">
            <div className="hero-chu">
              <p className="hero-nho">{caNhan.chiNhanh}</p>
              <h1>
                Xin chào, mình là <span className="ten">{caNhan.ten}</span>
              </h1>
              <p className="chuc-danh">{caNhan.chucDanh}</p>
              <p className="gioi-thieu">{caNhan.gioiThieu}</p>
              <div className="nut-nhom">
                <a className="nut nut-vang" href="#ung-dung">Xem ứng dụng</a>
                <a className="nut nut-vien" href="#lien-he">Liên hệ</a>
              </div>
            </div>
            <figure className="hero-anh">
              <img src="/images/tru-so-agribank-tay-ninh.jpg" alt="Trụ sở Agribank Chi nhánh Tây Ninh" />
              <figcaption>Trụ sở Agribank Chi nhánh Tây Ninh</figcaption>
            </figure>
          </div>
          <div className="duong-luon" aria-hidden="true" />
        </section>

        <section className="phan" id="mang-luoi">
          <div className="khung">
            <p className="phan-nho">Mạng lưới</p>
            <h2>Mạng lưới Agribank Tây Ninh</h2>
            <p className="phan-mo-ta">Hội sở, các chi nhánh và phòng giao dịch phục vụ khách hàng trên địa bàn tỉnh Tây Ninh.</p>
            <div className="video-khung">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/images/mang-luoi-poster.jpg"
                src="/videos/mang-luoi-agribank-tay-ninh.mp4"
              >
                Trình duyệt của bạn không phát được video.
              </video>
            </div>
            <ul className="so-lieu">
              <li><strong>1</strong> hội sở</li>
              <li><strong>10</strong> chi nhánh loại II</li>
              <li><strong>10</strong> phòng giao dịch</li>
            </ul>
          </div>
        </section>

        <section className="phan phan-xam" id="ung-dung">
          <div className="khung">
            <p className="phan-nho">Ứng dụng</p>
            <h2>Công cụ & ứng dụng</h2>
            <p className="phan-mo-ta">Các ứng dụng hỗ trợ khách hàng và công việc, bấm vào thẻ để mở.</p>
            <div className="luoi-app">
              {ungDung.map((app) => (
                <TheUngDung key={app.link} app={app} />
              ))}
            </div>
          </div>
        </section>

        <section className="phan" id="lien-he">
          <div className="khung lien-he">
            <div>
              <p className="phan-nho">Liên hệ</p>
              <h2>Cần hỗ trợ dịch vụ Agribank?</h2>
              <p className="phan-mo-ta">
                Đến trực tiếp trụ sở hoặc phòng giao dịch Agribank gần nhất tại Tây Ninh, hoặc tra cứu thông tin chính thức tại website Agribank.
              </p>
            </div>
            <a className="nut nut-do" href="https://www.agribank.com.vn" target="_blank" rel="noopener">
              www.agribank.com.vn
            </a>
          </div>
        </section>
      </main>

      <footer className="chan-trang">
        <div className="khung chan-trang-trong">
          <img src="/brand/agribank_logo_tren_nen_do.svg" alt="Agribank" className="logo-trang" />
          <p>
            Trang cá nhân của {caNhan.ten} – {caNhan.chucDanh}.<br />
            Thông tin chính thức về sản phẩm, lãi suất và biểu phí xem tại www.agribank.com.vn.
          </p>
        </div>
      </footer>
    </>
  )
}

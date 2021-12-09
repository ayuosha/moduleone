import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("AeroFlot");
    }

    async getHtml() {
        return `
        <section class="pt-4 pt-md-11">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-5 col-lg-6 order-md-2">
              <img src="static/img/index.png" class="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" alt="AirPlaneMain" data-aos="fade-up" data-aos-delay="100">
            </div>
            <div class="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">
              <h1 class="display-3 text-center text-md-start">
                Добро пожаловать на <span class="text-primary">AeroFlot</span>
              </h1>
              <p class="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                Путешествуйте на наших самолетах во всех точках мира.<br>Куда душе угодно :)
              </p>
              <div class="text-center text-md-start">
                <a href="tickets.php" class="btn btn-primary shadow lift me-1">
                  Купить билеты
                </a>
                <a href="index.php" class="btn btn-primary-soft lift">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </div> 
      </section><br><br>
      <section class="py-8 py-md-11">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-4">
              <h3>
                Частная компания
              </h3>
              <p class="text-muted mb-6 mb-md-0">
                Наша компания предоставляет услуги полета за низкую цену, благодаря богатому наследствию.
              </p>
            </div>
            <div class="col-12 col-md-4">
              <h3>
                Профессиональные пилоты
              </h3>
              <p class="text-muted mb-6 mb-md-0">
                Пилоты имеют высокую квалификацию, благодаря нашей известной программе по профессиональному вождению самолета "ООО АЭРОФЛОТ".
              </p>
            </div>
            <div class="col-12 col-md-4">
              <h3>
                Документация
              </h3>
              <p class="text-muted mb-0">
                Мы заботимся о наших клиентах и их безопасности.<br>Доверие - это самый главный критерий. Поэтому мы стараемся соблюдать все меры осторожности.
              </p>
            </div>
          </div>
        </div>
      </section>
        `;
    }
}
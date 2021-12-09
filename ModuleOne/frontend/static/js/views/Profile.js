import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Личный кабинет");
    }

    async getHtml() {
        return `
        <section class="container">
        <h1>
          <div class="col-lg-12">
            <label class="col-sm-12 col-form-label">Ваш логин</label>
              <div class="col-lg-12">
                <a class="text-muted"><?php echo $_GET["login"]; ?></a>
            </div>
          </div>
       </h1>
       <h1>
          <div class="col-lg-12">
            <label class="col-sm-12 col-form-label">Ваш пароль</label>
              <div class="col-lg-12">
                <a class="text-muted"><?php echo $_GET["password"]; ?></a>
            </div>
          </div>
       </h1>
    </section>
        `;
    }
}
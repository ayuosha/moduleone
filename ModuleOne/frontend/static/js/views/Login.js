import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Личный кабинет");
    }

    async getHtml() {
        return `
        <section class="container-xxl">
        <div class="shadow-lg p-3">
          <form class="row g-3" action="/profile" method="get">
            <div class="col-md-12">
              <label for="inputEmail4" class="form-label">Введите логин</label>
              <input type="login" class="form-control" id="inputLogin3" name="login">
            </div>
              <div class="col-md-12">
                <label for="inputPassword4" class="form-label">Введите пароль</label>
                <input type="password" class="form-control" id="inputPassword4" name="password">
              </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Войти</button>
                  <a href="register.php">Зарегистрироваться</a>
                </div>
          </form>
        </div>
      </section>
        `;
    }
}
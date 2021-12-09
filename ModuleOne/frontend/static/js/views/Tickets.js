import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Билеты");
    }

    async getHtml() {
        return `
        <section>
<div class="container-xxl shadow-lg p-3 mb-5 bg-body rounded">
<table class="table table table-bordered">
  <thead>
    <tr>
      <th scope="col">№</th>
      <th scope="col">Откуда</th>
      <th scope="col">Куда</th>
      <th scope="col">Дата вылета</th>
      <th scope="col">Цена</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-light">
      <th scope="row">#</th>
      <td>Город</td>
      <td>Город</td>
      <td>00.00.00 - 00:00</td>
      <td>
          <button type="button" class="btn btn-primary" onclick="window.location.href = 'booking.php'">Укажите цену</button></td>
    </tr>
    <tr>
      <th scope="row">#</th>
      <td>Город</td>
      <td>Город</td>
      <td>00.00.00 - 00:00</td>
      <td><button type="button" class="btn btn-primary" onclick="window.location.href = 'booking.php'">Укажите цену</button></td>
    </tr>
    <tr class="bg-light">
      <th scope="row">#</th>
      <td>Город</td>
      <td>Город</td>
      <td>00.00.00 - 00:00</td>
      <td><button type="button" class="btn btn-primary" onclick="window.location.href = 'booking.php'">Укажите цену</button></td>
    </tr>
  </tbody>
</table>
</div>
</section>
        `;
    }
}
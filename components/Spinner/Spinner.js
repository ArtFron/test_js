class Spinner {
  handleClear() {
    ROOT_SPINNER.innerHTML = "";
  }
  render() {
    const html = `
            <div class="spinner-container">
                <img class="spinner__img" src="components/Spinner/img/spinner.svg"/ >
            </div>
        `;

    ROOT_SPINNER.innerHTML = html;
    // class="spinner__img"
  }
}
const spinnerPage = new Spinner();

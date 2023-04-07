import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: ["Парк", "Отель", "Бассейн"],
      mainInfoHeight: 0,
      selectedTab: 0,

      titles: [
        "О парке", "Об отеле", "О бассейне"
      ],

      texts: [
        "Лето - это популярный сезон, и более половины ежегодных посещений приходится на июнь, июль и август. \n Зимний визит украсит ваши дни заснеженным пейзажем и бассейном с дымящимся гейзером. Однако доступ во внутренние районы парка ограничен из-за снегопада, а многие объекты закрыты, поэтому важно планировать зимнюю поездку заблаговременно.",
        "Проживающие обязаны бережно относиться к имуществу и оборудованию гостиницы, соблюдать чистоту и установленный порядок.",
        "Основные задачи организации бассейна: обеспечение права ребенка на сохранение и укрепление здоровья средствами плавания, развитие детей и подростков, способных воспитывать в себе здоровый образ жизни посредством занятий плаванием."
      ],
    }
  }
  componentDidMount() {
    this.setState({
      mainInfoHeight: document.getElementsByClassName("mainInfo")[0].offsetHeight,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="mainInfo">
          <h1>Общая информация</h1>
          {
            this.state.tabs.map((tab, id) => (
              <a className={id === this.state.selectedTab ? "selectedTab" : ""} key={id} href="#/" onClick={() => this.setState({ selectedTab: id, }, function () {
                this.setState({
                  mainInfoHeight: document.getElementsByClassName("mainInfo")[0].offsetHeight,
                })
              })}>{tab}</a>
            ))
          }
          <div className="info">
            <h2>{this.state.titles[this.state.selectedTab]}</h2>
            <p>{this.state.texts[this.state.selectedTab]}</p>
          </div>
        </div>
        <img style={{ height: this.state.mainInfoHeight + "px" }} src="beach.png" alt="" />
      </div>
    )
  }
}

export default App;

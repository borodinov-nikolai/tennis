import styles from './Team.module.scss'



const Team = () => {
  return (
    <div className={styles.root} >
        <div className="container">
            <h2 className={styles.title} >НАША КОМАНДА</h2>
            <ul className={styles.cardsList} >
                    <li className={styles.card} >
                        <div className={styles.imageHolder} >
                            <img src="/images/DSC02505.jpg" alt="" />
                        </div>
                        <h3>ЖЕЛЕЗНОВА АННА</h3>
                        <p>Тренер по теннису</p>
                        <span></span>
                        <ul>
                            <li>Сертифицированный тренер Федерации Тенниса России</li>
                            <li>Категория «Мастер»</li>
                             <li>Образование: высшее, Российский Государственный Университет Физической Культуры (РГУФК).</li>
                             <li>Курсы повышения квалификации "Методика начального обучения теннису по программе "Tennis 10s".</li>
                             <li>Организатор выездных спортивно-оздоровительных мероприятий для детей, опыт проведения международных турниров по пляжному теннису.</li>
                             <li>Стаж тренерской работы более 20 лет</li>
                        </ul>
                    </li>
                    <li className={styles.card} >
                        <div className={styles.imageHolder} >
                            <img src="/images/DSC04943-2.jpg" alt="" />
                        </div>
                        <h3>ЖУЙКО НИКОЛАЙ</h3>
                        <p>Тренер по теннису</p>
                        <span></span>
                        <ul>
                            <li>Кандидат в Мастера спорта по теннису.</li>
                            <li>Образование: высшее. Окончил курсы повышения квалификации Московской Государственной Академии Физической Культуры (МГАФК), специализация теннис.</li>
                            <li>Неоднократный победитель и призер турниров Российского Теннисного Тура (РТТ) по теннису в одиночном разряде.</li>
                            <li>Победитель Чемпионата России по теннису (35+) в 2019 году.</li>
                            <li>Член сборной России по пляжному теннису.</li>
                            <li>Стаж тренерской работы: 20 лет</li>
                        </ul>
                    </li>
                    <li className={styles.card} >
                        <div className={styles.imageHolder} >
                            <img src="/images/DSC04961.jpg" alt="" />
                        </div>
                        <h3>ОВЧИННИКОВ ЕВГЕНИЙ</h3>
                        <p>Тренер по теннису</p>
                        <span></span>
                        <ul>
                            <li>Кандидат в Мастера спорта по теннису.</li>
                            <li>Сертифицированный тренер Федерации Тенниса России, категория «Мастер».</li>
                            <li>Образование: высшее, окончил курсы повышения квалификации Московской Государственной Академии Физической Культуры (МГАФК), специализация теннис.</li>
                            <li>Неоднократный призёр и победитель турниров РТТ в одиночном разряде.</li>
                            <li>Окончил курсы повышения квалификации «Методика начального обучения теннису по программе «Теннис 10s».</li>
                            <li>Ученики: победители и призеры различных российских и международных турниров, члены юниорской сборной России.</li>
                            <li>Стаж тренерской работы: 20 лет</li>
                        </ul>
                    </li>
            </ul>
        </div>
    </div>
  )
}

export default Team
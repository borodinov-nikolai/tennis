import styles from './About.module.scss'
import cs from 'classnames'


const About = () => {
  return (
    <div className={styles.root} >
        <div className={styles.content} >
            <div className={cs(styles.inner, 'container')} >
              <h2 className={styles.title} >Почему выбирают нас</h2>
               <ul className={styles.advantagesList} >
                  <li>
                      <h3>Корты</h3>
                      <p>В распоряжении членов и гостей клуба2 крытых теннисных корта с сертифицированным покрытием "Терафлекс". У нас Вы сможете получить профессиональную консультацию и заказать все необходимое оборудование и экипировку для игры в теннис.</p>
                  </li>
                  <li>
                    <h3>Команда</h3>
                    <p>Квалифицированный тренерский состав, с богатым опытом работы, поможет Вам обучиться игре в теннис с нуля, а также повысить существующий уровень. В тренерском составе кандидаты в Мастера спорта по теннису, призеры Российских и международных турниров.</p>
                  </li>
                  <li>
                    <h3>Достижения</h3>
                    <p>Ученики нашего теннисного клуба неоднократные победители и призеры различных Российских и международных турниров, Члены юниорской сборной Российской Федерации. Профессиональная подготовка к соревнованиям.</p>
                  </li>
               </ul>
            </div>
        </div>
    </div>
  )
}

export default About
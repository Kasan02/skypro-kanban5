import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <div class="wrapper">
			<div className="pop-exit" id="popExit">
				<div className="pop-exit__container">
					<div className="pop-exit__block">
						<div className="pop-exit__ttl">
							<h2>Выйти из аккаунта?</h2>
						</div>
						<form className="pop-exit__form" id="formExit" action="#">
							<div className="pop-exit__form-group">
								<button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
								<button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="pop-new-card" id="popNewCard">
				<div className="pop-new-card__container">
					<div className="pop-new-card__block">
						<div className="pop-new-card__content">
							<h3 className="pop-new-card__ttl">Создание задачи</h3>
							<a href="#" className="pop-new-card__close">&#10006;</a>
							<div className="pop-new-card__wrap">
								<form className="pop-new-card__form form-new" id="formNewCard" action="#">
									<div className="form-new__block">
										<label for="formTitle" className="subttl">Название задачи</label>
										<input className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autofocus/>
									</div>
									<div className="form-new__block">
										<label for="textArea" className="subttl">Описание задачи</label>
										<textarea className="form-new__area" name="text" id="textArea"  placeholder="Введите описание задачи..."></textarea>
									</div>
								</form>
								<div className="pop-new-card__calendar calendar">
									<p className="calendar__ttl subttl">Даты</p>									
									<div className="calendar__block">
										<div className="calendar__nav">
											<div className="calendar__month">Сентябрь 2023</div>
											<div className="nav__actions">
												<div className="nav__action" data-action="prev">
													<svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
														<path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
													</svg>
												</div>
												<div className="nav__action" data-action="next">
													<svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
														<path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
													</svg>
												</div>
											</div>
										</div>
										<div className="calendar__content">
											<div className="calendar__days-names">
												<div className="calendar__day-name">пн</div>
												<div className="calendar__day-name">вт</div>
												<div className="calendar__day-name">ср</div>
												<div className="calendar__day-name">чт</div>
												<div className="calendar__day-name">пт</div>
												<div className="calendar__day-name -weekend-">сб</div>
												<div className="calendar__day-name -weekend-">вс</div>
											</div>
											<div className="calendar__cells">
												<div className="calendar__cell _other-month">28</div>
												<div className="calendar__cell _other-month">29</div>
												<div className="calendar__cell _other-month">30</div>
												<div className="calendar__cell _cell-day">31</div>
												<div className="calendar__cell _cell-day">1</div>
												<div className="calendar__cell _cell-day _weekend">2</div>
												<div className="calendar__cell _cell-day _weekend">3</div>
												<div className="calendar__cell _cell-day">4</div>
												<div className="calendar__cell _cell-day">5</div>
												<div className="calendar__cell _cell-day ">6</div>
												<div className="calendar__cell _cell-day">7</div>
												<div className="calendar__cell _cell-day _current">8</div>
												<div className="calendar__cell _cell-day _weekend">9</div>
												<div className="calendar__cell _cell-day _weekend">10</div>
												<div className="calendar__cell _cell-day">11</div>
												<div className="calendar__cell _cell-day">12</div>
												<div className="calendar__cell _cell-day">13</div>
												<div className="calendar__cell _cell-day">14</div>
												<div className="calendar__cell _cell-day">15</div>
												<div className="calendar__cell _cell-day _weekend">16</div>
												<div className="calendar__cell _cell-day _weekend">17</div>
												<div className="calendar__cell _cell-day">18</div>
												<div className="calendar__cell _cell-day">19</div>
												<div className="calendar__cell _cell-day">20</div>
												<div className="calendar__cell _cell-day">21</div>
												<div className="calendar__cell _cell-day">22</div>
												<div className="calendar__cell _cell-day _weekend">23</div>
												<div className="calendar__cell _cell-day _weekend">24</div>
												<div className="calendar__cell _cell-day">25</div>
												<div className="calendar__cell _cell-day">26</div>
												<div className="calendar__cell _cell-day">27</div>
												<div className="calendar__cell _cell-day">28</div>
												<div className="calendar__cell _cell-day">29</div>
												<div className="calendar__cell _cell-day _weekend">30</div>
												<div className="calendar__cell _other-month _weekend">1</div>
											</div>
										</div>
										
										<input type="hidden" id="datepick_value" value="08.09.2023"/>
										<div className="calendar__period">
											<p className="calendar__p date-end">Выберите срок исполнения <span class="date-control"></span>.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="pop-new-card__categories categories">
								<p className="categories__p subttl">Категория</p>
								<div className="categories__themes">
									<div className="categories__theme _orange _active-category">
										<p className="_orange">Web Design</p>
									</div>
									<div className="categories__theme _green">
										<p className="_green">Research</p>
									</div>
									<div className="categories__theme _purple">
										<p className="_purple">Copywriting</p>
									</div>
								</div>
							</div>
							<button className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
						</div>
					</div>
				</div>
			</div>

			<div className="pop-browse" id="popBrowse">
				<div className="pop-browse__container">
					<div className="pop-browse__block">
						<div className="pop-browse__content">
							<div className="pop-browse__top-block">
								<h3 className="pop-browse__ttl">Название задачи</h3>
								<div className="categories__theme theme-top _orange _active-category">
									<p className="_orange">Web Design</p>
								</div>
							</div>
							<div className="pop-browse__status status">
								<p className="status__p subttl">Статус</p>
								<div className="status__themes">
									<div className="status__theme _hide">
										<p>Без статуса</p>
									</div>
									<div className="status__theme _gray">
										<p className="_gray">Нужно сделать</p>
									</div>
									<div className="status__theme _hide">
										<p>В работе</p>
									</div>
									<div className="status__theme _hide">
										<p>Тестирование</p>
									</div>
									<div className="status__theme _hide">
										<p>Готово</p>
									</div>
								</div>
							</div>
							<div className="pop-browse__wrap">
								<form className="pop-browse__form form-browse" id="formBrowseCard" action="#">									
									<div className="form-browse__block">
										<label for="textArea01" className="subttl">Описание задачи</label>
										<textarea className="form-browse__area" name="text" id="textArea01"  readonly placeholder="Введите описание задачи..."></textarea>
									</div>
								</form>
								<div className="pop-new-card__calendar calendar">
									<p className="calendar__ttl subttl">Даты</p>
									<div className="calendar__block">
										<div className="calendar__nav">
											<div className="calendar__month">Сентябрь 2023</div>
											<div className="nav__actions">
												<div className="nav__action" data-action="prev">
													<svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
														<path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
													</svg>
												</div>
												<div className="nav__action" data-action="next">
													<svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
														<path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
													</svg>
												</div>
											</div>
										</div>
										<div className="calendar__content">
											<div className="calendar__days-names">
												<div className="calendar__day-name">пн</div>
												<div className="calendar__day-name">вт</div>
												<div className="calendar__day-name">ср</div>
												<div className="calendar__day-name">чт</div>
												<div className="calendar__day-name">пт</div>
												<div className="calendar__day-name -weekend-">сб</div>
												<div className="calendar__day-name -weekend-">вс</div>
											</div>
											<div className="calendar__cells">
												<div className="calendar__cell _other-month">28</div>
												<div className="calendar__cell _other-month">29</div>
												<div className="calendar__cell _other-month">30</div>
												<div className="calendar__cell _cell-day">31</div>
												<div className="calendar__cell _cell-day">1</div>
												<div className="calendar__cell _cell-day _weekend">2</div>
												<div className="calendar__cell _cell-day _weekend">3</div>
												<div className="calendar__cell _cell-day">4</div>
												<div className="calendar__cell _cell-day">5</div>
												<div className="calendar__cell _cell-day ">6</div>
												<div className="calendar__cell _cell-day">7</div>
												<div className="calendar__cell _cell-day _current">8</div>
												<div className="calendar__cell _cell-day _weekend _active-day">9</div>
												<div className="calendar__cell _cell-day _weekend">10</div>
												<div className="calendar__cell _cell-day">11</div>
												<div className="calendar__cell _cell-day">12</div>
												<div className="calendar__cell _cell-day">13</div>
												<div className="calendar__cell _cell-day">14</div>
												<div className="calendar__cell _cell-day">15</div>
												<div className="calendar__cell _cell-day _weekend">16</div>
												<div className="calendar__cell _cell-day _weekend">17</div>
												<div className="calendar__cell _cell-day">18</div>
												<div className="calendar__cell _cell-day">19</div>
												<div className="calendar__cell _cell-day">20</div>
												<div className="calendar__cell _cell-day">21</div>
												<div className="calendar__cell _cell-day">22</div>
												<div className="calendar__cell _cell-day _weekend">23</div>
												<div className="calendar__cell _cell-day _weekend">24</div>
												<div className="calendar__cell _cell-day">25</div>
												<div className="calendar__cell _cell-day">26</div>
												<div className="calendar__cell _cell-day">27</div>
												<div className="calendar__cell _cell-day">28</div>
												<div className="calendar__cell _cell-day">29</div>
												<div className="calendar__cell _cell-day _weekend">30</div>
												<div className="calendar__cell _other-month _weekend">1</div>
											</div>
										</div>
								
										<input type="hidden" id="datepick_value" value="08.09.2023"/>
										<div className="calendar__period">
											<p className="calendar__p date-end">Срок исполнения: <span class="date-control">09.09.23</span></p>
										</div>
									</div>
								</div>
							</div>
							<div className="theme-down__categories theme-down">
								<p className="categories__p subttl">Категория</p>
								<div className="categories__theme _orange _active-category">
									<p className="_orange">Web Design</p>
								</div>
							</div>
							<div className="pop-browse__btn-browse ">
								<div className="btn-group">
									<button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать задачу</a></button>
									<button className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить задачу</a></button>
								</div>
								<button className="btn-browse__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
							</div>
							<div className="pop-browse__btn-edit _hide">
								<div className="btn-group">
									<button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
									<button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
									<button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить задачу</a></button>
								</div>
								<button className="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
							</div>
													
						</div>
					</div>
				</div>
			</div>
		


		<header className="header"/>
			<div className="container">
				<div className="header__block">
					<div className="header__logo _show _light">
						<a href="" target="_self"/><img src="images/logo.png" alt="logo"/>
					</div>
					<div className="header__logo _dark">
						<a href="" target="_self"/><img src="images/logo_dark.png" alt="logo"/>
					</div>
					<nav className="header__nav">
						<button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
						<a href="#user-set-target" className="header__user _hover02">Ivan Ivanov</a>
						<div className="header__pop-user-set pop-user-set" id="user-set-target">

							 <a href="">x</a>

							<p className="pop-user-set__name">Ivan Ivanov</p>
							<p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
							<div className="pop-user-set__theme">
								<p>Темная тема</p>
								<input type="checkbox" className="checkbox" name="checkbox"/>
							</div>
							<button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
						</div>
					</nav>					
				</div>
			</div>	
      </div>		
		<header/>
		<main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
						<div className="main__column column">
							<div className="column__title">
								<p>Без статуса</p>
							</div>
							<div className="cards">
								<div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className="card__theme _orange">
												<p className="_orange">Web Design</p>
											</div>
											<a href="#popBrowse" target="_self">
												<div className="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
										</div>
										<div className="card__content">
											<a href="" target="_blank">
												<h3 className="card__title">Название задачи</h3>
											</a>
											<div className="card__date">
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<p>30.10.23</p>
											</div>
										</div>
									</div>
								</div>
							
								<div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className="card__theme _green">
												<p className="_green">Research</p>
											</div>
											<a href="#popBrowse" target="_self">
												<div className="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
										</div>
										<div className="card__content">
											<a href="" target="_blank">
												<h3 className="card__title">Название задачи</h3>
											</a>
											<div className="card__date">
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<p>30.10.23</p>
											</div>
										</div>
									</div>
								</div>
							
								<div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className="card__theme _orange">
												<p className="_orange">Web Design</p>
											</div>
											<a href="#popBrowse" target="_self">
												<div className="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
										</div>
										<div className="card__content">
											<a href="" target="_blank">
												<h3 className="card__title">Название задачи</h3>
											</a>
											<div className="card__date">
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<p>30.10.23</p>
											</div>
										</div>
									</div>
								</div>
								
								<div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className="card__theme _purple">
												<p className="_purple">Copywriting</p>
											</div>
											<a href="#popBrowse" target="_self">
												<div className="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
										</div>
										<div className="card__content">
											<a href="" target="_blank">
												<h3 className="card__title">Название задачи</h3>
											</a>
											<div className="card__date">
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<p>30.10.23</p>
											</div>
										</div>
									</div>
								</div>
								
								<div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className="card__theme _orange">
												<p className="_orange">Web Design</p>
											</div>
											<a href="#popBrowse" target="_self">
												<div className="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
										</div>
										<div className="card__content">
											<a href="" target="_blank">
												<h3 class="card__title">Название задачи</h3>
											</a>
											<div className="card__date">
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<p>30.10.23</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>						
						<div className="main__column">
							<div className="column__title">
								<p>Нужно сделать</p>
							</div>
							<div className="cards">
								<div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className="card__theme _green">
												<p className="_green">Research</p>
											</div>
											<a href="#popBrowse" target="_self">
												<div className="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
										</div>
										<div className="card__content">
											<a href="" target="_blank">
												<h3 className="card__title">Название задачи</h3>
											</a>
											<div className="card__date">
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<p>30.10.23</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="main__column">
							<div className="column__title">
								<p>В работе</p>
							</div>
							<div className="cards">
								<div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className="card__theme _green">
												<p className="_green">Research</p>
											</div>
											<a href="#popBrowse" target="_self">
												<div className="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
										</div>
										<div className="card__content">
											<a href="" target="_blank">
												<h3 className="card__title">Название задачи</h3>
											</a>
											<div className="card__date">
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<p>30.10.23</p>
											</div>
										</div>
									</div>
								</div>
						
								<div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className="card__theme _purple">
												<p className="_purple">Copywriting</p>
											</div>
											<a href="#popBrowse" target="_self">
												<div class="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
										</div>
										<div className="card__content">
											<a href="" target="_blank">
												<h3 className="card__title">Название задачи</h3>
											</a>
											<div className="card__date">
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<p>30.10.23</p>
											</div>
										</div>
									</div>
								</div>
						
								<div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className="card__theme _orange">
												<p className="_orange">Web Design</p>
											</div>
											<a href="#popBrowse" target="_self">
												<div class="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
										</div>
										<div className="card__content">
											<a href="" target="_blank">
												<h3 class="card__title">Название задачи</h3>
											</a>
											<div className="card__date">
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<p>30.10.23</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="main__column">
							<div className="column__title">
								<p>Тестирование</p>
							</div>
							<div className="cards">
								<div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className="card__theme _green">
												<p className="_green">Research</p>
											</div>
											<a href="#popBrowse" target="_self">
												<div className="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
										</div>
										<div className="card__content">
											<a href="" target="_blank">
												<h3 className="card__title">Название задачи</h3>
											</a>
											<div className="card__date">
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<p>30.10.23</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="main__column">
							<div className="column__title">
								<p>Готово</p>
							</div>
							<div className="cards">
								<div className="cards__item">
									<div className="cards__card card">
										<div className="card__group">
											<div className="card__theme _green">
												<p className="_green">Research</p>
											</div>
											<a href="#popBrowse" target="_self">
												<div className="card__btn">
													<div></div>
													<div></div>
													<div></div>
												</div>
											</a>
										</div>
										<div className="card__content">
											<a href="" target="_blank">
												<h3 className="card__title">Название задачи</h3>
											</a>
											<div className="card__date">
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
													<g clip-path="url(#clip0_1_415)">
														<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
														<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
													</g>
													<defs>
														<clipPath id="clip0_1_415">
															<rect width="13" height="13" fill="white" />
														</clipPath>
													</defs>
												</svg>
												<p>30.10.23</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
          
				
						
					</div>
				
				</div>
			</div>
    
		</main>
    
		
    <div/>
  
    </>
  )}
    
  

export default App

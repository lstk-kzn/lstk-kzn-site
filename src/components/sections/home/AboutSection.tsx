import Section from '@/components/Section'

const aboutCards = [
	{
		label: 'Рынок',
		description:
			'Наша команда, более 20 лет занимается строительством домов и разного вида сооружений. За годы работы, мы пришли к выводу, что оптимальным решением качества, цены и быстроты возведения объектов, является строительство из профиля ЛСТК. Во времена	нестабильных цен, бизнесу и частному сектору необходимо построить и начать эксплуатацию нового здания в кратчайшие сроки и минимальными издержками'
	},
	{
		label: 'Команда',
		description:
			'Опытные менеджеры нашей компании, инженеры, конструкторы и проектирвощики завода способны выполнить самые сложные задачи в	кратчайшие сроки по возведению сооружений с использованием профиля из ЛСТК'
	},
	{
		label: 'Производство',
		description:
			'За эти годы были введены в эксплуатацию миллионы квадратных метров зданий различного значения. Завод занимает лидирующие позиции по выпуску профилей ЛСТК. Наша общая команда реализует полный цикл строительных услуг - от проектирования и производства конструкций до монтажа объектов под "ключ".'
	}
]

const AboutSection = (): JSX.Element => {
	return (
		<Section label='О нас' id='show'>
			<div className='flex flex-col gap-8'>
				{aboutCards?.map(c => (
					<div className='card border bg-base-100' key={c?.label}>
						<div className='card-body'>
							<h2 className='card-title lg:text-xl'>{c?.label}</h2>
							<p className='text-justify lg:text-lg'>{c?.description}</p>
						</div>
					</div>
				))}
			</div>
		</Section>
	)
}

export default AboutSection
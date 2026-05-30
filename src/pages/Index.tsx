import { Home, Lock, Sparkles, ShieldCheck, Trees, Waves, Plus, Minus, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Как далеко посёлок от Москвы?",
      answer:
        "До Москвы всего 45–50 минут на автомобиле по удобным шоссе: Дмитровское, М11 или Рогачёвское. Посёлок расположен в Дмитровском районе Московской области — отличная доступность при полном ощущении загородной жизни.",
    },
    {
      question: "Какие варианты отделки доступны?",
      answer:
        "Дом предлагается в трёх вариантах отделки: тёплый контур (базовая комплектация для отделки на свой вкус), предчистовая отделка и дизайнерский ремонт под ключ. Менеджер подберёт оптимальный вариант под ваши задачи.",
    },
    {
      question: "Что есть из инфраструктуры в посёлке?",
      answer:
        "На территории посёлка: живописное озеро 118 м, хвойные аллеи с тысячами туй, большой парк, теннисный корт, банный комплекс, современный коворкинг и экспоцентр. Посёлок окружён природой и оснащён видеонаблюдением, КПП и автоматическим шлагбаумом.",
    },
    {
      question: "Как обстоит дело с коммуникациями?",
      answer:
        "Дом полностью обеспечен: электричество подведено кабелем под землёй, водоснабжение от глубокой скважины 70 м, тёплый пол по всему дому, современный септик Юнилос Астра 5. Газ проведён вдоль границы участка для экономичного отопления.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/a2e5fa9a-e84e-47d8-8e52-1ea9eb290068/files/03f39e3a-f008-4395-96c8-a32dace0dabe.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Home className="w-5 h-5" />
            <span className="font-medium text-balance">Лесной Берег</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["О посёлке", "Дома", "Инфраструктура", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+7"
              className="hidden sm:block px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Позвонить
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Узнать цену</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Коттеджный посёлок бизнес-класса · Дмитровский район МО</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Ваш дом у леса и озера.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Одноэтажные дома 115 м² с тёплым полом, потолками 3 м и собственным участком — в 45 минутах от Москвы, среди хвойных аллей и живописного озера.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Посмотреть дома
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">КПП, видеонаблюдение и шлагбаум 24/7</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Природа */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Хвойные аллеи</h3>
              <p className="text-white/80 leading-relaxed">Тысячи туй, парк и прогулочные дорожки прямо у дома.</p>
            </div>

            {/* Озеро */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Озеро 118 м</h3>
              <p className="text-white/80 leading-relaxed">Живописное озеро на территории посёлка — гармония воды и природы.</p>
            </div>

            {/* Безопасность */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Безопасность 24/7</h3>
              <p className="text-white/80 leading-relaxed">КПП, видеонаблюдение и автоматический шлагбаум круглосуточно.</p>
            </div>

            {/* Инфраструктура */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Бизнес и отдых</h3>
              <p className="text-white/80 leading-relaxed">Коворкинг, экспоцентр, теннис и банный комплекс на территории.</p>
            </div>
          </div>
        </div>
      </section>

      {/* House Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ваш будущий дом</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Продуманное до мелочей пространство, куда хочется заехать сразу и наслаждаться новой жизнью.
              </p>
            </div>

            {/* House Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Планировка</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    115 м² · 3 спальни · просторная кухня-гостиная · потолки 3 метра · возможность установки камина.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Конструктив</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Прочный фундамент, стены из блока с премиальной облицовкой, энергоэффективные окна с 5-камерным профилем.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Коммуникации</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Тёплый пол по всему дому, скважина 70 м, электричество под землёй, септик Юнилос Астра 5, газ у границы.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Участок</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Забор 1,8 м, распашные ворота 4 м, парковка из брусчатки, ухоженный газон и аккуратная отмостка.
                  </p>
                </div>
              </div>
            </div>

            {/* House Image */}
            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src="https://cdn.poehali.dev/projects/a2e5fa9a-e84e-47d8-8e52-1ea9eb290068/files/2b77133b-06ad-408d-b7f4-1623825dfdda.jpg"
                alt="Дом в посёлке Лесной Берег"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Записаться на показ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать о посёлке, домах и условиях покупки — отвечаем честно и подробно.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Вопрос или комментарий
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:border-transparent resize-none outline-none"
                      placeholder="Расскажите, что вас интересует..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Наш менеджер свяжется с вами в течение рабочего дня, ответит на все вопросы и организует поездку на показ.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold">Расположение</h4>
                        <p className="text-gray-600 text-sm">Дмитровский район, Московская область</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold">Позвонить менеджеру</h4>
                        <p className="text-gray-600 text-sm">Пн–Вс, с 9:00 до 21:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 p-6">
                    <p className="text-white/80 text-sm leading-relaxed">
                      Земля категории <span className="text-white font-semibold">ИЖС</span> — оформление без сложностей. 
                      Доступны варианты рассрочки и ипотеки.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Home className="w-6 h-6" />
                  <span className="text-xl font-semibold">Лесной Берег</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Коттеджный посёлок бизнес-класса в Дмитровском районе Московской области. Дома 115 м² у хвойного леса и озера — для тех, кто выбирает качество жизни.
                </p>
              </div>

              {/* О посёлке */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О ПОСЁЛКЕ</h3>
                <ul className="space-y-3">
                  {["Инфраструктура", "Локация", "Безопасность", "Фотогалерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Покупка */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОКУПКА</h3>
                <ul className="space-y-3">
                  {["Варианты отделки", "Условия покупки", "Рассрочка", "Ипотека"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Поддержка */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">КОНТАКТЫ</h3>
                <ul className="space-y-3">
                  {["Записаться на показ", "Задать вопрос", "Документы", "Договор"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости посёлка</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Лесной Берег · Коттеджный посёлок бизнес-класса</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index

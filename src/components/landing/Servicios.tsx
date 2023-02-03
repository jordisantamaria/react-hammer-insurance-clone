import { Button } from "../Button"
import { Card } from "../Card"
import ArrowRight from '../../icons/arrow-right.svg'

const cardList = [
  {
    title: 'Auto',
    description: 'Múltiples opciones y descuentos, SR-22. Te ofrecemos la cobertura perfecta. ¡siempre a tu lado cuando nos necesites!',
    image: '/img/car.png',
    imgClassName: 'w-[154px] h-[103px] bottom-0 left-[132px]'
  },
  {
    title: 'Hogar',
    description: 'Protege tu casa, propiedad en alquiler, casa móvil o seguro de inquilino. Elige entre múltiples opciones.',
    image: '/img/house.png',
    imgClassName: 'w-[146px] h-[146px] bottom-0 left-[132px]'
  },
  {
    title: 'Negocio',
    description: 'Asegura tu negocio, tus trabajadores, y cualquier vehículoculo commercial. General Liability, Workers Comp, Bonds etc.',
    image: '/img/business.png',
    imgClassName: 'w-[145px] h-[145px] bottom-0 left-[132px]'
  },
  {
    title: 'Placas',
    description: 'Hammer renueva las placas y calcomanías de su auto, además de gestionar el cambio de propietario y demás tramitaciones.',
    image: '/img/plates.png',
    imgClassName: 'h-[55px] w-[110px] bottom-[40px] left-[164px]'
  },
]

export const Servicios = () => {
  return  (
    <div className="flex flex-col items-center">
      <h3 className="text-primary-light text-xl">Servicios</h3>
      <h2 className="text-[32px] font-black mb-[10px]">Tu agente cercano: en Hammer Insurance nadie se queda atras</h2>
      <p className="text-xl">En Hammer Insurance siempre hablamos tu idioma, conocemos tu comunidad, somos vecinos.</p>
      <div className="flex">
        {cardList.map((item) => (
        <Card className="w-[236px] mb-[90px] mt-16 relative mr-16">
            <h3 className="font-extrabold text-2xl mb-2">{item.title}</h3>
            <p className="text-sm h-[99px] mr-4">{item.description}</p>
            <Button variant="outlined" color="primary-light" className="text-xs h-[35px] my-6">
              Ver más
            </Button>
            <img src={item.image} className={`absolute z-[-1]   ${item.imgClassName}`} />
        </Card>

        ))}
      </div>
      <Button className="mb-16" variant="outlined" color="primary-light" rightIcon={<ArrowRight className="filter-primary-light ml-4"/>}>Ver todos los servicios</Button>
    </div>
  )
}

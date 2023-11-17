import { Button } from "../Button"
import Star from '../../icons/star.svg'
import GoogleLogo from '../../icons/Grupo 3380.svg'
import YelpLogo from '../../icons/Grupo 3381.svg'
import Chat from '../../icons/chat.svg'
import { LogosCard } from "./LogosCard"

export const Hero = () => {
  return (
    <div className="mb-[187px]">
      <div className="grid grid-cols-[50%_50%] ml-[114px]">
        <div className="mt-[120px]">
          <h1 className="text-primary-light text-xl mb-[9px]">Seguro integral en el que puedes confiar</h1>
          <h2 className="text-[45px] font-black leading-[110%] mb-[28px] mt-[18px] w-[576px]">Confía en Hammer Insurance ¡somos vecinos!</h2>
          <p className="text-lg mb-[45px] leading-7">Calidad en el trato al cliente y los mejores precios del mercado, amplias coberturas y faclidad en los pagos</p>
          <div className="flex">
            <Button className="mr-4 min-w-[195px]" variant="contained" color="primary-light">Servicios</Button>
            <Button className="min-w-[195px]" variant="outlined" color="primary">Solicitar Presupuesto</Button>
          </div>
        </div>
        <div>
          <div className="absolute right-0 top-0 w-[44%]">
            <img src="/img/carCollageBg2.png " className="absolute z-[-1]" />
          </div>
          <img src="/img/carCollage.png" className="" />

        </div>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="flex items-center">
          <span className="font-black text-[17px] mr-2">4.9</span>
          {[1, 2, 3, 4, 5].map((item) => (
            <Star key={item} className="filter-yellow" />
          ))}
          <span className="text-[10px] font-semibold ml-2">(525 Reviews de Clientes)</span>
        </div>
        <div className="flex gap-6">
          <LogosCard>
            <GoogleLogo className="h-[35px]" />
          </LogosCard>
          <LogosCard>
            <img src="/img/bbbImage.png" className="h-[35px]" />
          </LogosCard>
          <LogosCard>
            <YelpLogo className="h-[35px]" />
          </LogosCard>
        </div>
        <div className="absolute right-2 p-[20px] rounded-full shadow-sm flex justify-center items-center">
          <Chat />
        </div>
      </div>
    </div>
  )
}

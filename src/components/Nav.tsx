import Logo from '../icons/logo.svg'
import { Button } from './Button';
import { LanguageSelect } from './LanguageSelect';
import { Select } from './Select';
export const Nav = () => {
  return (
    <nav className="mr-[22px] ml-[33px] h-[113px] flex justify-between text-link items-center">
      <Logo className="w-[200px]"/>
      <div className="flex justify-between ml-[100px] w-[100%] items-center">
        <Select>
          Servicios
        </Select>
        <div className="cursor-pointer font-bold">Pagos</div>
        <div className="cursor-pointer font-bold">Oficinas</div>
        <div className="cursor-pointer font-bold">Blog</div>
        <div className="cursor-pointer font-bold text-link-white">Nosotros</div>
        <div className="cursor-pointer font-bold text-link-white">Contacto</div>
        <Button variant='outlined' color='link-white' className='min-w-[167px] h-[46px] font-semibold text-[15px]'>
          Pedir Presupuesto
        </Button>
        <LanguageSelect/>
      </div>
    </nav>
  );
};

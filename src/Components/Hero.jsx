import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TiSocialInstagram } from "react-icons/ti";


const Hero = () => {
  return (
    <div className='bg-slate-900 py-24 text-white items-center sm:w-full'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I'm Sanjay</h1>
          <p className='mt-4 text-3xl text-white capitalize tracking-wide'>
            SDE
          </p>
          <p className='mt-2 text-lg  text-white capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/devarjankars'>
              <FaGithubSquare className='h-8 w-8 text-white hover:text-amber-300 duration-400' />
            </a>
            <a href='https://www.linkedin.com/in/sanjay-devarjankar-320422211/'>
              <FaLinkedin className='h-8 w-8  text-white hover:text-amber-300 duration-400' />
            </a>
            <a href='#'>
              <TiSocialInstagram className='h-8 w-8  text-white hover:text-amber-300 duration-400' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};
export default Hero;
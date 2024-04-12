"use client"
import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faGlobe, faGrinAlt} from '@fortawesome/free-solid-svg-icons';
import { faGitAlt, faGithub, faGithubAlt, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-tl from-stone-100 from-0% to-white to-75%">
      <div className="bg-project-ui bg-cover bg-center">

      <div className="container h-full mx-auto py-0 px-4">
        <div className="w-full h-screen flex flex-col gap-5 justify-center">
            <div className="flex justify-between items-center w-full">
              <Image className='lg:w-36 lg:h-auto w-20' src="https://media.discordapp.net/attachments/1091340777197670460/1228360831381540946/image.png?ex=662bc32c&is=66194e2c&hm=b5a0d0241c87ce5c9f0e624b8f69b7d7e74c9c9fd81d39d05a37302c714ce970&=&format=webp&quality=lossless" width="141" height="141" alt=""/>
              <Image className='lg:w-36 lg:h-auto w-20' src="https://media.discordapp.net/attachments/1091340777197670460/1228371180747227167/image.png?ex=662bcccf&is=661957cf&hm=7e14222d669b12fe68d8f0c357d85ee4d8bced433be9c866045700007837ccdf&=&format=webp&quality=lossless" width="159" height="159" alt=""/>
            </div>
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <p className="font-medium">Olá, 👋 sou</p>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter relative -left-1">Desenvolvedor Front-end</h1>
              <p className="max-w-lg font-medium">Meu nome é Gabriel, tenho 19 anos e estou em busca de uma oportunidade para atuar em uma empresa, tenho 1 ano de experiência com front-end em projetos freelancer.</p>
              <div className="flex lg:justify-start justify-center  gap-2">
                
                <a target="_blank" className="w-10 h-10 rounded-md shadow text-slate-700 bg-slate-50 cursor-pointer hover:bg-white transition text-center flex items-center justify-center" href='https://firebasestorage.googleapis.com/v0/b/gabrielferreira-ee0cd.appspot.com/o/Programador%20frontend%20(1).pdf?alt=media&token=ea8e771b-073e-4acc-8fef-01481719fb9c'><FontAwesomeIcon icon={faFileLines}/></a>  
                 
                <a target="_blank" className="w-10 h-10 rounded-md shadow text-slate-700 bg-slate-50 cursor-pointer hover:bg-white transition text-center flex items-center justify-center" href="https://github.com/Player1mene"><FontAwesomeIcon icon={faGithubAlt}/></a>  
                
                <a target="_blank" className="w-10 h-10 rounded-md shadow text-slate-700 bg-slate-50 cursor-pointer hover:bg-white transition text-center flex items-center justify-center" href='https://www.linkedin.com/in/gabriel-sifr/'><FontAwesomeIcon icon={faLinkedinIn}/></a>  
              
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <Image className='lg:w-36 lg:h-auto w-20' src="https://media.discordapp.net/attachments/1091340777197670460/1228371283981500416/image.png?ex=662bcce8&is=661957e8&hm=f0ab915500becd9d4fa27bf0a985f13223058fe4e6912ebee6fd39b725676284&=&format=webp&quality=lossless" width="141" height="141" alt=""/>
            </div>
        </div>

      </div>
      


      </div>
      
      <div className="w-full">
          <div className='container mx-auto'>
              <div className='flex flex-col gap-20 py-20'>
               
                <h1 className="px-4 lg:px-0 text-2xl font-bold">PROJETOS</h1>

                <div className="grid lg:grid-cols-2 lg:px-0 px-4 grid-cols-1 gap-20">

                  <div className='flex flex-col gap-2'>

                    <Image className='w-full h-auto' width="1000" height="1000" alt='' src="https://firebasestorage.googleapis.com/v0/b/gabrielferreira-ee0cd.appspot.com/o/abea-ui-min.png?alt=media&token=24c1ac70-e511-4d4f-98de-0b583b6cb571"/>
                    <h1 className="text-2xl font-bold">ABEA</h1>
                    <p className='font-medium'>O site da Associação do Bem-Estar Animal (ABEA) é uma plataforma online dedicada a promover e facilitar o cuidado com os animais. Ele serve como um recurso abrangente para todos os interessados no bem-estar animal, oferecendo uma variedade de informações, recursos e ferramentas úteis.</p>
                    
                    <div className='flex gap-5 w-full'>
                      <a className="shadow rounded-md w-full py-2 flex justify-center items-center gap-2 cursor-pointer bg-white hover:bg-slate-50 text-slate-700 transition" target="_blank" href='https://orng-abea-project.vercel.app/'><FontAwesomeIcon icon={faGlobe}/> Visitar Website</a>
                      <a className="shadow rounded-md w-full py-2 flex justify-center items-center gap-2 cursor-pointer bg-white hover:bg-slate-50 text-slate-700 transition" target="_blank" href="https://github.com/Player1mene/orng-abea"><FontAwesomeIcon icon={faGithub}/>  Ver Repositório</a>
                    </div>

                </div>

                <div className='flex flex-col gap-2'>

                    <Image className='w-full h-auto' width="1000" height="1000" alt='' src="https://firebasestorage.googleapis.com/v0/b/gabrielferreira-ee0cd.appspot.com/o/phonksec-ui-min.png?alt=media&token=0a55f48d-a8ee-4e7c-90a1-1e518b087333"/>
                    <h1 className="text-2xl font-bold">PHONKSEC</h1>
                    <p className='font-medium'>O site da PhonkSec foi cuidadosamente desenvolvido para oferecer uma experiência de usuário fluida e intuitiva. Utilizando as mais recentes tecnologias web, o site é responsivo, adaptando-se perfeitamente a qualquer dispositivo, seja desktop, tablet ou smartphone. Sua interface limpa e moderna permite uma navegação fácil e sem complicações.</p>
                    
                    <div className='flex gap-5 w-full'>
                      <a className="shadow rounded-md w-full py-2 flex justify-center items-center gap-2 cursor-pointer bg-white hover:bg-slate-50 text-slate-700 transition" target="_blank" href='https://phonksec.vercel.app/'><FontAwesomeIcon icon={faGlobe}/> Visitar Website</a>
                      <a className="shadow rounded-md w-full py-2 flex justify-center items-center gap-2 cursor-pointer bg-white hover:bg-slate-50 text-slate-700 transition" target="_blank" href='https://github.com/Player1mene/phonksec'><FontAwesomeIcon icon={faGithub}/>  Ver Repositório</a>
                    </div>

                 </div>

                </div>
              </div>
          </div>
      </div>
    </main>
  );
}

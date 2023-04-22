import Image from 'next/image'
import { ReactElement } from 'react'

const iconStyle = 'h-8 w-8 sm:w-11 sm:h-11 shadow-md rounded-md text-white fill-current';

interface Social {
  name: string,
  href: string,
  icon: ReactElement
}

const socials: Social[] = [
  {
    name: 'whatsapp',
    href: 'https://wa.me/34648645557',
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      version='1.1'
      viewBox="0 0 800 800"
      className={iconStyle + ' bg-[#25D366]'}
      aria-hidden="true"
    >
      <path d="M519 454c4 2 7 10-1 31-6 16-33 29-49 29-96 0-189-113-189-167 0-26 9-39 18-48 8-9 14-10 18-10h12c4 0 9 0 13 10l19 44c5 11-9 25-15 31-3 3-6 7-2 13 25 39 41 51 81 71 6 3 10 1 13-2l19-24c5-6 9-4 13-2zM401 200c-110 0-199 90-199 199 0 68 35 113 35 113l-20 74 76-20s42 32 108 32c110 0 199-89 199-199 0-111-89-199-199-199zm0-40c133 0 239 108 239 239 0 132-108 239-239 239-67 0-114-29-114-29l-127 33 34-124s-32-49-32-119c0-131 108-239 239-239z" />
    </svg>

  }, {
    name: 'email',
    href: 'mailto:vtviera67@gmail.com',
    icon: <div className={iconStyle + ' flex bg-white'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version='1.1'
        viewBox="52 42 88 66"
        className='w-6 h-6 sm:w-9 sm:h-9 m-auto'
      >
        <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
        <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
        <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
        <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
        <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
      </svg>
    </div>
  }, {
    name: 'linkedin',
    href: '',
    icon: <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      viewBox="0 0 800 800"
      className={iconStyle + ' bg-[#007bb6]'}
      aria-hidden="true"
    >
      <path d="M268 629h-97V319h97zm157 0h-97V319h93v42h1q31-50 93-50 114 0 114 133v185h-96V466q0-70-49-70-59 0-59 69z" />
      <circle cx="219" cy="220" r="56" />
    </svg>
  }, {
    name: 'github',
    href: 'https://github.com/freckledAsf',
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      version='1.1'
      viewBox="0 0 800 800"
      className={iconStyle + ' bg-[#171515]'}
      aria-hidden="true"
    >
      <path d="M400 139c144 0 260 116 260 260 0 115-75 213-178 247-9 3-17-2-17-13v-71c0-35-18-48-18-48 57-6 119-28 119-128 0-44-27-70-27-70s14-29-2-69c0 0-22-7-72 27-42-12-88-12-130 0-50-34-72-27-72-27-16 40-2 69-2 69s-27 26-27 70c0 100 62 122 119 128 0 0-14 10-17 35-15 7-53 18-76-22 0 0-13-25-39-27 0 0-26 0-2 16 0 0 17 8 29 38 0 0 16 51 88 35v44c0 11-9 16-18 13-103-34-178-132-178-247 0-144 116-260 260-260z" />
    </svg>

  }, {
    name: 'discord',
    href: 'https://discord.gg/R9QX5wrU3d',
    icon: <div className={iconStyle + ' flex bg-[#5865F2]'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version='1.1'
        viewBox="0 0 127.14 96.36"
        className='w-6 h-6 sm:w-9 sm:h-9 m-auto'
      >
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
      </svg>
    </div>
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="rounded-full relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/avatar.png"
          alt="Avatar"
          width={148}
          height={148}
          priority
        />
        <h1 className='md:text-4xl sm:text-2xl text-lg font-bold mt-10'>Victor Tamayo Viera</h1>
        <p className='md:text-xl sm:text-lg text-xs mt-4'>
          ¡Hola! Tengo 18 años y soy un estudiante de grado superior en programación (DAM),
          me interesan todo tipo de tecnologias relacionadas con software y
          cada dia trato de aprender más que el anterior.
          <br/><br/>
          Tengo amplia experiencia en desarrollo web, habiendo dominado los lenguajes nativos HTML y CSS,
          y estando actualmente trabajando con los frameworks de JavaScript: React y NextJS,
          combinandolos con el lenguaje mas sofisticado, TypeScript.
          <br/><br/>
          Estas invitado a echar un vistazo a mis proyectos subidos en GitHub.
          Tambien puedes contactarme de cualquiera de los metodos listados.
        </p>
      </div>

      <div className='flex space-x-4 mt-10'>
        {socials.map(social => (
          <a
            key={social.name}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            {social.icon}
          </a>
        ))}
      </div>
    </main>
  )
}

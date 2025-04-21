import '../app/styles/loading.scss';
import Image from 'next/image';
import logo from '../assets/logo/logo-blanco.gif';

export default function Loading() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full bg-[#030303] fixed inset-0 left-0 right-0 top-0 bottom-0 opacity-50 container-loading" />
            <div className='flex items-center justify-center w-full h-full absolute top-0'>
                <Image src={ logo } alt="Loading..." className='fixed img-loading' loading="lazy" width={500} height={500}/>
            </div>
        </>
    )
}
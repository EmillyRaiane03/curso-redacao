import Link from 'next/link'
import Image from  'next/image'
import styles from 'C:/Users/ryanp/OneDrive/Documentos/GitHub/curso-redacao/projetofelipealves/src/styles/Layout.module.css'

interface LayoutUserProps{
    usuario: string
    children: any
    className?: string
    divisoes?: boolean
}

export default function Teste(props: LayoutUserProps){

    function aluno(){
        return (
            <>
                <Link href="/usuario/aluno">Materiais</Link>
                <Link href="/">Turmas</Link>
                <Link href="/usuario/aluno/perfil">Perfil</Link>
            </>
        )
    }
    function funcionario(){
        return (
            <>
                <Link href="/">Materiais</Link>
                <Link href="/">Turmas</Link>
                <Link href="/usuario/funcionario/perfil">Perfil</Link>
            </>
        )
    }
    function root(){
        return (
            <>
                <Link href="/">Cursos</Link>
                <Link href="/">Cursos</Link>
                <Link href="/">Cursos</Link>
            </>
        )
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-slate-200 m-8 rounded-xl w-11/12 h-5/6'>
                <div className="flex flex-row w-full h-full">
                    
                    <div className="bg-white w-72 rounded-md">
                        <div className='relative my-0 mt-3 p-5'>
                            <Image src='/images/FELIPEALVESRBG2.png' width='200' height='100' alt='imagemDoCurso'/>
                        </div>
                        <div className='flex flex-col items-start p-14 mr-12 gap-5'>
                            {props.usuario == 'aluno' ? aluno(): props.usuario == 'funcionario' ? funcionario() : root()}
                        </div>
                    </div>

                    {props.divisoes? 
                     (<div className={`w-full  ${props.className}`}>{props.children}</div>):
                     (<div className={`bg-white rounded-md w-full m-2 p-6 ${props.className}`} >{props.children}</div>)}

                </div>
            </div>
        </div>
    )
}
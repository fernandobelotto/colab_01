import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as Star } from './assets/star.svg'
import { ReactComponent as Google } from './assets/google.svg'
import { ReactComponent as Blob1 } from './assets/blob1.svg'
import { ReactComponent as Blob2 } from './assets/blob2.svg'
import avatar from './assets/avatar.png'

function CustomInput({ type, label }: any) {
  return (
    <div className='mb-3 bg-input flex flex-col p-2 px-5'>
      <label className='text-tiny text-p1'>{label}</label>
      <input type={type || 'text'} className='text-white1 outline-none bg-transparent'></input>
    </div>
  )
}

function LeftContent() {
  return (
    <div className='p-10'>
      <Logo />
      <h1 className='text-6xl text-white1 pb-4 font-extrabold'>Create new account</h1>
      <p className='text-p1 mb-10'>Already a member? <a className='text-color8'>Sign In</a></p>
      <CustomInput label='Full Name' />
      <CustomInput label='E-mail' type='email' />
      <CustomInput label='Password' type='password' />
      <p className='text-p1 mt-3'>the passowrd must be at least 6 characters.</p>
      <button className='bg-button mt-10 text-white1 w-full'>Register</button>
      <p className='text-p1 mt-4'>By creating an account, you agree to our <a className='text-color8'> Terms and Conditions</a></p>
      <p className='text-p1 text-center mt-7'>Or</p>
      <button className='bg-button-out w-full text-p1 mt-7 flex items-center justify-center'>
        <Google />
        <span className='ml-5'>Continue with Google</span>
      </button>
    </div>
  );
}

const Card = () => (
  <>
    <div className='h-70 border border-bg2 bg-bg2 rounded-lg shadow-md p-5 min'>
      <div className='mb-5'>
        <div className="flex flex-row items-center">
          <img src={avatar} />
          <div className='ml-4'>
            <p className='text-white1 text-lg'>Jhonatan Farias</p>
            <p className='text-p1'>Product Designer</p>
          </div>
        </div>
      </div>
      <p className='text-p1'>Your courses have been life-changing! I have embarked on a new career starting with the courses on your website. I’m grateful to have come across your site that will allow me to continue to build my career as a designer without having to spend a fortune and feel the stress on top of what comes with other family responsibilities.</p>
      <div className='flex flex-1 flex-row justify-end items-center'>
        <Star />
        <p className='text-md text-white1 ml-1'>4.8</p>
      </div>
    </div>
  </>
)

export default function App() {
  return (
    <>
      <div className='flex flex-row'>
        <div className='bg-bg1 flex flex-1 h-screen items-center'>
          <LeftContent></LeftContent>
        </div>
        <div className='bg-bgr flex-1 h-screen flex items-center'>
          <div className='p-20 z-10'>
            <h1 className='text-white1 text-6xl font-extrabold mb-10 z-2'>A New Way To Learn Design</h1>
            <Card></Card>
          </div>
          <div className="absolute top-0 right-0">
            <Blob1 />
          </div>
          <div className="absolute bottom-0">
            <Blob2 />
          </div>
        </div>
      </div>
    </>
  );
}

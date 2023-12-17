import Image from 'next/image'

export default function ProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <Image
        className='border-4 border-black dark:border-zinc-500 rounded-full mx-auto mt-8'
        src='/images/prabir-singh.png'
        alt='prabir singh'
        width='200'
        height='200'
        priority={true}
      />
    </section>
  )
}

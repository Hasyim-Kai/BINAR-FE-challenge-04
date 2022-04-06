type Props = { text : string }

export default function GreenButton({ text }: Props) {
  return <button className='h-10 py-2 px-3 text-white bg-green-500 rounded-sm'><b>{ text }</b></button>
}
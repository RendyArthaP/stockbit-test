interface Props {
  objectPoster: string | any
  closePoster(): void | any
}

const Poster = ({ objectPoster, closePoster }: Props) => {
  return (
    <div 
      className="min-w-screen h-screen fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      data-testid="poster"
    >
   	  <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
       <div onClick={() => closePoster()}>
         <span className="text-white absolute text-4xl cursor-pointer top-4 left-4 md:left-10">X</span>
       </div>
      <div className="w-full max-w-lg p-5 relative m-auto rounded-xl shadow-lg">
        <img 
          src={objectPoster}
          alt="poster"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default Poster

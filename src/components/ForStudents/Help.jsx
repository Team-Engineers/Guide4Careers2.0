import React from 'react'
import Card from './HelpCard';


const Help = () => {
    const cards = [
        {
          image: 'https://s3-alpha-sig.figma.com/img/e992/9016/46f0aea51ab7d66b4c89f02fa1adf47d?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fcR3g52n6XHoWVoAorImBBsFx-YFhgslxwxz0miG7wUmY-632g-Y~AuZsVqV6tWA7ooas8anVR8EpUIdQvmergVkyN~fs1zG5qbzIlyuocKdZwKNUrs-F91GtRTnIzjwFe4LIvUXZvrdwrW4wwa5bcYNagY~GiKlU6n0s-Ne0Qho6i0Ch1wNt8r-cwuxUX~hmfwYdbLa4eASkW7q~wtfs5X7OiWZiIH0y8WMG0f-QCFyke1YMuwUICmswKPXPG0lfTODr5LoqC1E7DLkgMv4G9DQz-ulkheNp34NWI9QISBvVNEy8SlAe00Ypm0kPypx9Rz7uUPzX10wxtNauXZ6ag__',
          description: 'Humanities, Science or Commerce -pick the right stream for you based on your interests & aptitude',
          bgColor:"rgba(178, 164, 255, 1)",
          color: "white"
        },
        {
          image: 'https://s3-alpha-sig.figma.com/img/c5e9/5113/d06e070bb082a060e020f95847a4f3a8?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eFO3MhE2TAAVFDU0bnRtQh3mBAoCnPBSlZHmJIq8gSbKTHE8OLqeYOzyqpOW04Jb2HJC9hZu51WU~aiH32FaUSjxDv4NTVs9aZRinwW3lX2wrrpb84jAMgyVEiYrmIeDZjuH1GIG69AVtBQ8WZlvicUzLWDazsq0uk-VsiWTo9wW0oWHdioowiCDcrdoCxJ6uoSeZuBARujmXCThdK9GjYFHiHQG5gEywiY4U~PsfQ1iYT4ntk4~cPiJh8al14Y7n-IIkscvORR7iK8cgBMy9cIAq0i480alWhYyEZb40OPpKvlULNQXIzeuakNVU3raxENPFmLw6lJCUzR~wAjGSA__',
          description: 'Learn in detail about all the career options available for your chosen stream and subject combinations',
          bgColor:"rgba(255, 180, 180, 1)",
          color: "white"
        },
        {
          image: 'https://s3-alpha-sig.figma.com/img/f871/e918/6541063962383256ecd66c7ba67f6862?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bgj~8lPwwAXoTpCXbZb4vWT5PGtXYM0M137WcQaabsmZ6VC6EkQNfcs3~cmbSg2zeWF02QldSWE7ypV9F4d~0mc~Z3haNgMq17OlXxuiXk5VQHor3SJLCjaoY-rBWQCu9WzUVBC5Q0Tq6qmZI-ORt65yC1nZlh5pDt8nIkp08PwEvZdrcaIVs7qfknv4EmIOyMH1Tmh0dPmj7ZME1l5BE2h-w7kFGNKuYMzP1XpOlpz697xI7kSePuRLJ-HVA23L~EjxWAThGI0TmdAkWIuuacOH6bU0uJs-06D3oxXcwtfIX4sJHWKnefDtpDk2B9l48O1MU2GDkgKTA5gD7WefRA__',
          description: 'Build a holistic profile aligned to your career interests & ambitions with guidance from expert coaches',
          bgColor:"rgba(253, 247, 195, 1)",
          color: "black"
        },
        {
          image: 'https://s3-alpha-sig.figma.com/img/a38c/6308/b08e2e8ef303860a82a2db5b3e4bd50e?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kIzZJBpiafDe9-pc7ipPs1GyuKpsWcKExvNZEihjbA9F1zBHni9LaX1reLRXfp~bq-uzIdxPN9z-XEz7xoKgCiVVrfnoxC6fDEhZxrTV-JPuoa24~0IJDKBBZSSbpX0YLk0CZpw6mn1IzMcxvEWei6ysx~rq0r2CkAIpqWRj0WafpBYvwEMra5xtSVRcJ0bq6CE1BfFMW0zauvqwkgkwM~2QrUbLAvSfbgCtF-G3~KlxNzkYhsXcKZ9mXnqN9ouNlv4ztOGCjk6Yz2D0U070J6MqpGdtzDyxEh7HpyaPn~i4EZDa-tWrygVC8UY1Pi9HpVBs4A23uONxTQ9HP-yRCw__',
          description: 'Deep dive into your preferred career domains through virtual career simulations & internships',
          bgColor:"rgba(255, 222, 180, 1)",
          color: "black"
        }
      ];
  return (
        <>
      <div className="flex justify-center items-center flex-col text-center mt-10 sm:mt-10 md:mt-10 md:mb-10 z-10">
        <h1 className="text-4xl font-bold mb-10">Why Choose Us?</h1>
      </div>
      <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} description={card.description} bgColor={card.bgColor} color={card.color} />
      ))}
    </div>
      </>
  )
}

export default Help

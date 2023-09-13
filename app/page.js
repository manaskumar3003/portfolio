import Image from 'next/image'

export default function Home() {
  return (
    <main>
<nav class="flex justify-between px-20 py-10 items-center bg-white">
  <h1 class="text-xl text-gray-800 font-bold">Web Portfolio</h1>
  <div class="flex items-center">
    
    <ul class="flex items-center space-x-6">
    <li class="font-semibold text-gray-700">
  <a href="https://github.com/supermanas" class="button-link">github</a>
</li>
<li class="font-semibold text-gray-700">
  <a href="https://www.linkedin.com/in/manaskumar3003/" class="button-link">linkedin</a>
</li>
      
      
        
        
    </ul>
  </div>
</nav>
<div class="bg-gradient-to-b from-green-50 to-green-100">
    

    <section class="py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        Look,connect, collaborate, with 
                        <div class="relative inline-flex">
                            <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                            <h1 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Manas Kumar</h1>
                        </div>
                    </h1>

                    <p class="mt-8 text-base text-black sm:text-xl">Hey since you have thought of visiting my portfolio ,scroll down to learn more, also i have a video(useless maybe) for you</p>

                    <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button"> Start exploring </a>

                        <a href="#" title="" class="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                            <svg class="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path fill="#F97316" stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Watch video
                        </a>
                    </div>
                </div>

                <div>
                    <img class="w-full" src="/profile.jpg" alt="" />
                </div>
            </div>
        </div>


    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">
            19
          </h6>
          <p className="mb-2 font-bold text-md">github repo</p>
          <p className="text-gray-700">
             one of the many weird things i do ,though some of the repo are just clones
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">
            4
          </h6>
          <p className="mb-2 font-bold text-md">web languages</p>
          <p className="text-gray-700">
            as of now i practiced 4 languages used for web development
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">32</h6>
          <p className="mb-2 font-bold text-md">Subscribers</p>
          <p className="text-gray-700">
            It's a  start, being able to start something new
            makes me happy.
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">5</h6>
          <p className="mb-2 font-bold text-md">websites</p>
          <p className="text-gray-700">
            Build websites out of some were used to host school events
          </p>
        </div>
      </div>
    </div>





    </section>
    {/*--end of section of data ----*/}

{/*start of coding languages*/}
<section class=" bg-gray-800 text-gray-100  body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Skill set</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-100 border p-4 rounded-lg">
          <img alt="abt" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="data:image/png;base64,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" />
          <div class="flex-grow">
            <h2 class="text-gray-100 title-font font-medium">C++</h2>
            <p class="text-gray-100">Basic</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-100 border p-4 rounded-lg">
          <img alt="abt" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQRERERERIQEREREhESERESEhIRERIQGBQZGRgUGhgcIS4lHB4rHxgYJjgnKy81NTU1GiQ+QD00Py40NTEBDAwMEA8QGhISGjQjISE0NDE0MT80NDQ/NDQxNzE0MTQ0NDY0NDQ0NDE0NDQxNDQ0NDQ0MTQxNDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgUGBwj/xABJEAACAQICBgUIBQgIBwAAAAAAAQIDEQQSBQYhMVFSExQykZJBYXGBgqGxwSJUcsLRFjNCU2JjovAHIzVDk7Kz0hckNHN0lOH/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQMEBQIG/8QAMxEBAAEDAQMKBgEFAQAAAAAAAAECAxEEElKhFBUhMTJRYbHh8AUTcYGRwdEiM0Fi8SP/2gAMAwEAAhEDEQA/APswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGspJbwNjFyvKo35iO4FvMhmRUuLgW8yGZFS4uBbzIZkVLi4Fu6/m4uv5uVLi4Fu6/m4zIqXFwLeZDMipcXAt5kMyKtzFwLeZDMipcXAuJmSmpEkKoFgGsXc2AAAAAAAAA1crK7K0532m+JluXHaRAAAAAMAZMAABcAAAAAAChkwCAZAKgAAAAA3hOzLKdymWKMvIBKAAAAAAACniH9P2V8WYM1u2/sr5mEAAMAZMGTFyDE9z9B8o1N1qxuIxuFp18TKdObnni4UYqSVGcldxgmtqT2H1ab2P0M/PGjsHKvKnRpQ6SpUVoQvFZmoOT2yaW5N7X5Cj6V/SJp/EYWth44Ws6cZ05ymowpzUpKdk3ni/Ic7Tes+Lp6P0bWhiHCpXWL6WeSlepkqRUdjjZWT8iR47SWh62ElGFel0UqicoxzQleKdm/oNn2DUP+zcJ9mr/AK9QD5mtdNIfW5f4eH/2Hf1J1mxWJxNWFbEupCOEr1IxyUY2nGUEpfRinszPzbTzeuP9pYv/AL33Yn2zHWyVd35ufk/ZYHxzAa9Y+E6c515VacZRdSk6dGKnD9KN4wTTavZ332PU6665unChDA1LTqwjXnVUYycKUl9CNpJpSe1tNXWVcT55ofR8sVNUae2bhOcI88oQc8i4N5bLzs2w+jpzoYnEJZaeGVNTbTV5zqRgoLz2k5PhZcUB7fVbWPF1sPpSdWvKc8Pg3UoydOlHo55KrzLLBX2xjvutg1C1ixeKxvRV68qlPoKk8jp0orOpQSd4xT8r8vlOTqV/0umv/Bl/p1yrqLpOjhMZ0uIn0dPoakM2Wc/pSlBpWgm/IwPtQRxNHa2YPE1YUaNbPUnmyx6KtC+WLk9soJbk/KdsismAjIQABQJaG8iJaG8CwAAAAAAACnW7b+yvmYRmv2/ZXzMAYAMMKNmAzyusteUMTTtKSjKivoqTSzKcrv02aMV658ujaxlls2vm17GcPTz3Neax4PV3UGeExNDESxMKiouTcFRlByvTlDfndu1fc9xJ1qfM/FL8R1qfM/FL8TT5fG7xbnN9W9w9V7W/VSWkKlKca0aXRwlBqVNzzXle+ySsdjV/RzwmFpYdzVR01NZ1HIpZpynuu7driea61PmffL8R1qfNLxSLy+N3ic31b3BFprUKeJxVbELEwgqtTOoOjKTjsStfOr7uB7mus8Zx3Z4yjfhdNHi+sz55eKRnrE+aXikTl8bvH0Ob6t7gxqzqPPBYqniJYiFRU4zTgqUoN5oOO9zfE72nNAxxGEr4WlkodPUjVlNU8ydTpY1JycU1dyy77nB6zPml4pDrMuaXikXl8bnGF5vq3uCbQepU8LSx1N4iE3i8O6KkqUo9G3GpHM05vN292zccj/hhP65T/wDXl/vOj1mfNLxSHWp80vExy+N3j6JzfO/wSat6hyweLp4mWJhUVNT+gqMoOWenKG/O7dq+7yHuDwfW580u9jrc+aXikOXxu8Tm6d/h6veGTmavSbw8ZSbblOb2u7spW+R0zdoq2qYq72hcp2Kpp7gAHt4CWhvISahvAsAAAAAAAAp1u37K+Zg2xHb9lfM0AM1bMs0kyKxJnldbvzuHlxVaPc4NfFnp5s83rZ2aEuFSUfFBv7pr6qM2am1opxfp+/lLjgJg4zuMmUhE3SRMwdLQEphpDMJ0o7Cxvs4oyrDMDSxholNJDIjBlmAr2ugoWw1LzxlLxSb+ZeK+jY2oUVwpU/8AIiyfQ0RimI8IfOXJzXVPjIZBgrwE1DeREtDeVFgAAAAAAAFPEdv2V8zRm+J7fsr4sjYBmkjdkUiKjmzga0q9GL5a0X3qUfvHdmcXWNXw8/2XB91RGK/GbdUeEtjTTi9R9YcC+whr1sqdjfNs9RRxT2M4b6CmOl9J0LUz4XDSe1ujRv6ciTL9lwXccfVKpmwOHfBTj4ak4/Iu6Vx3V6M6zg5qGVuKdm05KO/139R36ao2IqnufN3KJ+bVRHXmY4rWVcF3IZVwXcjyK15h9XqeOP4D8uofV5+OP4GPlVne9/hm5DqN3jH8vXZVwXchlXBdyPI/l1D6vPxx/Az+XMPq8/HH8Byqzve/wch1G7xj+Xrcq4LuRwtaZJQpx4yk+5JfeOf+XEPq9Txx/AraQ0v1rJJQdPLn2OSk3e3BbN3vMGp1Fuq1VTTPTLNp9Jdou01V04iPopsxLd6mDalDNKMeZxj3ySOVjPQ6r39KGWMY8qS7lY2MGT6N80yYMgAS0N5CTUN4RYAAAAAAABTxHb9lfMjZJie37K+LI2BhkciRkUiKhkcrTavh63mpzfcr/I6kyhpCGanVjzU5x74tHmuM0zDJbnFUT4w8jF/RXoKeJ3Ms0ZXinxSK2IW84EPpY63t9RZ3wSXLVqx73n++dPTsM+FxK/dVH4Vm+Rw/6P5/8vWjwr39UqcF91nqmr7Dt2Y2rMR3w+f1E7GpqmP8Tn9vkvQGHQPrXRR5Y9yNehjyx7kavIJ3+Hq3edP9OPo+S9Cv5sbxoLze4+s9HHlj3Ix0UeWPchyCd/h6nOkbnH0fL6eHXmLlONkfRejjyx7keQ1ga6xNJJZVBbNn6KfzMF/Szap2trP29WWzrPnVbOzj7+jmlnRsc1egv3lN90k/kVmXtCxviaXmcn3QkzBbjNdMeMebPdnFFU+EvZI2RqjY7z51kAFGCahvIiWhvCLAAAAAAAAKeJ7fsr4sjZJie37K+LI2BhkUiRkciKrzKtZXLUypVD1DxWH7KXDZ3bCKv5Sy42nUjy1Ki/jZFVifPzGJmO59NE56e9Nq9rFHA9KpwlNVHFrK4rK4qSd78bruO1HX+k/7ir46ZyNWdFUMVXqU60XNRpZ42nKFmpxT7LV+0epWpmC/VS/xan4nR0/zptxsTGPfg52qnSxdn5lNU1dHV/1Rjr1Tf9xV8UDP5c0/1FXxQPM47R8adarTirRhUnGKu39FTaXuSK7wpgnV3YmYzwhnjQ6eYicT+ZesevdP9RV8UDoaD1nji6rpQpVItQlNycotWUoq2z7SPntSgej/AKPqX9fXly0cvimn9wy2NTcruU0zPR9GLU6Oxbs1VUx0xHe98eK0xK+Iqv8Abt3WXyPanhMdK9aq+NSb/jZ718/0Ux4tX4dH9dU+HvyV2dPV2N8Qv2YTl8I/eOYztarw/raj4U7d8l+BpaaM3qfq6GpnFmv6PTI2QQR23AZAAAlobyMkobyosAAAAAAAApYntv7MfizRkmI7fsr5kbAwyORIyOZFQVCnWRcmVayCw8diVatWX7y/itL5lesXdIxtiKnnUJfwpfIp1UcK7GLlUeMvo7M5t0z4R5Qu6l1LY23PRqR98ZfdPoZ8r0RjY4bFUq082SLmp5Vd2lCUVs9LR9EwWnMNXsqdek5PdCT6Ob9mdm+46OjrjY2Znpy5nxG1VNyK4icYjp/LmaT1dlOc6kJQeeTllknG19+1Xv7jjYrQ9eHapTa4wWdfw3Peg9XNFbqnMZiWK3r7lERE4mIeAp6uYip+gqaflqSUP4dsvcej1c0E8J0kpTjOVRQTUYuKio5vK3tvm4LcdwxUmopyk1GK3yk1GK9LZ7taW3bnajMy83tbdu0zTOIif8YZPnrldt8Xf1vaepxesmGipQjVjUm1JJUk5xva22a+jv8AOeTRp66uKppiJ6s/pt/D7dVMVTVGM4/bZnf1VjtrS81Nf53+B589LqtH+qqPjO3dBP5mLRxm9H38mbWzizP283eCBk7DiBgGSgS0N5GSUN4RYAAAAAAABSxHbf2Y/FmhviO37K+ZowNWaSN2ayAhqFSqi3NFaoRYeT0zG1deelH3TmUaiOprAstWk3ulCa7nF/eOddM4up/vVPoNLVmzR9P3LmYmjdHPlRflVzvziV5UTFEtqJVMFpbE4fZSrVYJbo5rwXsu8fcd/Ca9YiOypSpVdmxq9KV+Lauu5I47wyEcMjLTero7MsVdi1c7VMT77+t0cZrfjKl1CUKEX+qgnK3BynfvSRyJqpWkpVqlSq+M5ylb0XewtQoInhSPNd2qrtTl6ot27fYpiPf5a4Sio+QvIjhElRiKpyHrtW42w9+NSb+EfunkHNLyo9roGNsNT86m++Umbmhj/wBJ+jQ+ITi1Ed8ugjJgHWcdkyYMkAkobyMkobyosAAAAAAAAp4nt+yviyNkuLj2ZcHZ+h//AH4kTA1NZGxqwIpFeoizNENREVzMfhYVElOEZJXtmV2vQ969RyK2g4b6cqlPzXzx7pbfed6uiqzHXaor7UZZrd65R2aph56ro2vDdkqr9l5Jd0tnvKdSbh+chOH24tL1Pcz1rMNbLGtXoqJ6pmOPv8tyj4hXHaiJ4PKxlGW5o3UTtVtFUZbXBRb8sL036Xl2P1lOehJLsVXbhUim/ErfA1qtHcjq6W1RrrVXXmFNRMSrRjvaR06OhI/pznLzRtCPuu/edPC6Ppw2whBPmteXie33lo0Vc9qccXmvX247MTPD14PPUKVWp+bpVJLmkskfSnKyZ08Nq9WntqVIQXLCLnLvdkveegpwLMIm1TorcdfS1K9fcns4jj5ubhNW8PCzlGdaXGtJyXhVo96O3SpxilGMYxjFWjGKUYxS8iS3I1giVGzTRTTGKYw067ldc5qmZZAQPTwyAABJQ3v0EZNQW9lRMAAAAAAADScU009zVmUGnF5Zep8VxOkRVaakrP1Pyp8UBTZqzadGUfJmjxW/1o0zriBiSIZxJm0aOwFOrTKsqZ0pxRDKAVQlBmuVl90zXoyLlTVNm8aRaVE3jALlXhSLEKZJGJJFB5y1hAmgjCsbxaKjeJsjWMkbKSA2QMZkYzriBsZNHNcTeNOUvJlXF7+4DEY5nZevzFtK2wxCCirI3AAAAAAAAAAAAaSgnvSfpSZuAIurw5IeFGOrQ5IeFEwAh6tDkh4UOrw5IeFEwAh6vDkh4UOrw5IeFEwAh6tDkh4UOrQ5IeFEwAh6vDkh4UOrw5IeFEwAh6tDkh4UZ6vDlh4USgCLq8OWHhRjq0OSHhRMAIurw5YeFDq8OWHhRKANIwS3JL0JI3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=" />
          <div class="flex-grow">
            <h2 class="text-gray-100 title-font font-medium">html</h2>
            <p class="text-gray-100">enough to work good</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-100 border p-4 rounded-lg">
          <img alt="abt" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="data:image/png;base64,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" />
          <div class="flex-grow">
            <h2 class="text-gray-100 title-font font-medium">php</h2>
            <p class="text-gray-100">worked on framework like laravel </p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="abt" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="data:image/png;base64,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" />
          <div class="flex-grow">
            <h2 class="text-gray-100 title-font font-medium">React</h2>
            <p class="text-gray-100">work on nextjs,nextui,reactjs</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="abt" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="data:image/png;base64,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" />
          <div class="flex-grow">
            <h2 class="text-gray-100 title-font font-medium">flutter</h2>
            <p class="text-gray-100">tried but not proficient</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="abt" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSGyniQ09hDtT1fZJgF38fCfI3-mOrhuzyg&usqp=CAU" />
          <div class="flex-grow">
            <h2 class="text-gray-100 title-font font-medium">typescript</h2>
            <p class="text-gray-100">tried along with javascript</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="abt" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BuIzY141a5nIZoGEQkFYPN_f3bQddC4uu5ctRPO1Ftp6BNy_iV5foebwEIYesnZLA6c&usqp=CAU" />
          <div class="flex-grow">
            <h2 class="text-gray-100 title-font font-medium">tailwind</h2>
            <p class="text-gray-100">work on tools for css and tailwind plugins</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="abt" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="data:image/png;base64,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" />
          <div class="flex-grow">
            <h2 class="text-gray-100 title-font font-medium">javascript</h2>
            <p class="text-gray-100">work on tools for website</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

{/*end of coding language*/}




    {/*--section of features----*/}
    <section class="p-4 lg:p-8 bg-gray-800 text-gray-100">
    <h1 class="text-4xl text-center	font-bold text-gray-100 sm:text-6xl lg:text-7xl">
                        Famous web projects
                        <div class="relative inline-flex">
                            
                        </div>
                    </h1>
	<div class="container mx-auto space-y-12">
		<div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="/createch2.jpg" alt="" class="h-80 bg-gray-500 aspect-video" />
			<div class="flex flex-col justify-center flex-1 p-6 bg-gray-900">
				<span class="text-xs uppercase text-gray-400">Learning</span>
				<h3 class="text-3xl font-bold">Createch 2 & 3</h3>
				<p class="my-6 text-gray-400">2nd and 3rd edition of tech event of school where the moto was to teach coding related stuffs to students
        .designed the portal for info and learning platform </p>
				
			</div>
		</div>
		<div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="/createch3.jpg" alt="" class="h-80 bg-gray-500 aspect-video" />
			<div class="flex flex-col justify-center flex-1 p-6 bg-gray-900">
				<span class="text-xs uppercase text-gray-400">competitive</span>
				<h3 class="text-3xl font-bold">createch-3</h3>
				<p class="my-6 text-gray-400">designed a competitive event website informing about various competition related to tech.In addition played the role of president</p>
				
			</div>
		</div>
		<div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="/decryptx.png" alt="" class="h-80 bg-gray-500 aspect-video" />
			<div class="flex flex-col justify-center flex-1 p-6 bg-gray-900">
				<span class="text-xs uppercase text-gray-400">Jcryptic hunt</span>
				<h3 class="text-3xl font-bold">Decryptx</h3>
				<p class="my-6 text-gray-400">designed a full stack application for a cryptic event hosted by school where various school participate to solve challenges</p>
			</div>
		</div>
	</div>
</section>
</div>

{/* start of schooling*/}
<section id ="edu" class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">ryan international school</h2>
            <p class="leading-relaxed text-base">highest education qualifications are from Ryan international school vasant kunj</p>
          
              
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Nsut</h2>
            <p class="leading-relaxed text-base">pursuing Btech in mechanical engineering from nsut 2023-2027</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*hobbies*/}
<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="basketball"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigZ8oJLIBGnXtmGsF7nwpVeSJUa1BqSdw7Q&usqp=CAU" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="singing"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ8NDQ8NDQ4NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSotLi4uFx8zOzMsNyguLisBCgoKDg0OFQ8PFS4dFx0rLSstKy0rLSsrKystLS0rKysrLSsrLSsrKystLy0tLS0rKy0tKy0rMysrKystNys3K//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwECBAUGB//EADsQAAMAAQIEAwUFBgQHAAAAAAABAgMEEQUSITETQVEGImFxgQcykaGxQlJicrLRosHh8BUWM0NTgpL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAMAAgIDAQEAAAAAAAAAAQIREgMhMUETQlEyBP/aAAwDAQACEQMRAD8A+VIukUQxHQ5FkMlFJGygC8obKKQh0oRrShsyVhDpRNUmZHRJEIdEk1UiZkbMhMjpkztVIrMDJgvMjZgnapC5gbOMZMDpxkWrkZ1jLeGaliLrELo9MXhh4Zt8Iq8QuhphqBdQb6xiLgqUrGGoE1JuuBFyXKixjqRbRqqRNIuVNjPSF0h9IXSLiaz0hVI0UhVIqJIpC6Q+kKooiaQuh1IVQ0lUijGULoAXRRjGUYBeRiKSMkAvKGyLlDZAGSOkXCHSiaqGQh0IXCHQiaqGyh0IpCH40RauReJHxBXHJpiTK1cgiB0wWxwaIxmdq5C4xj4xjMeMz8b186PTvNXqpnz3ppvb8mT7t1FfE2TxHimDSpeNczv2nvT+S7nM/wCc9Ek/eyNp9EsVe8vXrt+Z8912svPlrLkp1VPu32XovRGfc6p4Jr2575b9PpuD2x0N/eu8X8+Kn/Tuda9fpkubx8Oz22fixt+p8b3DcV8GP1Tnlr7FqNThiXd5ccyv2quUjJp+IafPssWXHdPtKtc//wA9z5QnsSqaaa6NNNNdGn6h+Cf0flv8fWckGe5PDaH2l1OLZO/FhPtk957enN3PWcM4zh1a2luciSdY67r5PzRNwuJzOU25EXJsuRFyEorNUiaRppCaRpEVntCaRotCqRcTWehdDqFUVE0mkKpDqF0MiaF0NoWxkWygyhbAGSMkXI2QBkjJKSMkAbA6BUDoJqobCHwJgfBFVD8aNONCMZpxmdaQ7GjVikRjRrxIyyaQ/FBrxQJxI2YZMrWkXx4j5/8AaRp9RORXfO9O6icPvrwk+R7rl3+9uq67dtj6Xhg53tfwB6/SeFH34tZI+NJNfo2V4s+cpsvJjvH0+GsqauI6StPmyYL258VOLSe+1LujKd7jAAQASBAAEj9FqHiyxkl7OKT+m5nAA+oYMyywrSaTW+zXVFciOX7G5ufTVP8A48jX4rc6+RHNfV02nuMloTSNNoRRUTWe0Jo0WIs0iaRQqh1CqKQTQqh1CqKIqhdDKF0Mi6KMuyjALyNkVI2QBsjJFyNkAbI6BMDoJqj4HwIg0QRVxoxmnGZsZpxmVXGrGa8KMmI24jLJrGvCjfgRiwm/AZVpG3BIzievjR6TNqsmynBiq1zPZVe3ux83Wy+pGnPD/bLranT6TTrdRly3mtp9G4nZS1/77/Qfjx6ykGeXONr5Zmy1dVdvmu6q7r966e7f4tiyWQei4QQAAAAABgAAA9Z7BU99RO/TlxPby33rqeoyI857A4fc1GTydY8a+aTb/qR6PIc2f+q1x/yzZDPZoyGeyoVIsTY6xNmkRSbE0OoTRUSVQqhtCqKSXQqhtCqGRbKMvRRgF5GSKljJYA6WMliZY2QB8D4M8joJqo0wPgzQx8EVUa8ZpxmTGzTjZlWkbMTNmFmDGzZioyyaR0MLN+BnMxUbcNmVax1sDPk32me02PX54wYFNYdI8i8bu8uStlXK/wBxcu3x79tj13t5xDLg4ZleFuXkqMN2u+PHT2p7+W/3d/4j44b/APPh+zLzZ/qAAg63MAAANBJACCQIG6bA8uSMU98lzC+Dp7bgHv8A2Qxcmgh7bPJWTJ8/e2T/AAlHQyjZxzjiccLaYlRK9JS2QjIzl3u7b/EIyGex9sz2zSIpVCLG0Jo0iKVQqhliqLiaXQqi9MVTGlShdF6F0MlKFsvRRgEyNkVI2QBkjZFSMkAdLHwzPLHSxU40Qx8MzQx8MirjXDHwzJDHLIkt20l6t7IzsXG7HRqx2ed1HHcGPs3kfpHb8X0ORq/abNfTHtiX8PW/xf8AkT+O0+5HtuI8Xx6THz5Hu30iF9638Ph8TzN+3Wp33jHp5n92pu2vrzLf8Dy2XNVt1VVTfd03Tf1ZVGmPhxnz7Rl5Mr8en2L2a43j4hgdOUqn3M+J+8k38+8tf5ryPIfadwzDgemy6fBOFWss5axY1GJtOeXfboq618/oL+zdUtTmpb8qwctLy5na5f0o9P7Ycfei08rwY1C1DrFU5f8Aopcu7VL9rf0+DMNceTWLeXrD2+RsC+fJz3VKYx8z35MaaifhKbbS+os6nOkgAAAAAADreykp67Bv5O6+qx01+ZyTZwfUeDqcOR9FORb/AMr6P8mxX4pz5fTMlGXIy92Z7o55GtqtsRbL3QmmaSIpdMVTL0xNM0iKpQmhlMVTKiaXQqhlCqKSpQui9C6AKMoy1FQCZYyWJljJYA5MYmKTLpgD5Y2WZpoRn4hytzK3a6bvsI4600UycQxx3pN+k9ThvJmy/vNP092RuLh1P71Kfl7zFoztVxm66R7i+HWn9fI5+TPVdXVP5ts2ZeHzN41zVy23LfTdPbpsP1XD8WLFT2dXTU4+Z9eZvy2AOfi0uXJ9zHdfFS9vx7G/T+z+e+/Jj/mrd/lud/TTyzM778szO789lsa4ZFyq5I5Gm9lF/wBzM38IhL823+gyfY/eumo930eL3v6ju46NEWZXPL+rmOJvBuH4tHj8PCn7z3u6e93Xq/7I879o+qbnT4dvddZMrf8AFKUpfhT/ACPRzlMnFNBi1mPw8qfR7xcva4r1TM8brLqrvxqPlwHrdR7FV1eLPL9JyQ5/xLf9DmZfZXWT2xxfxjLG3+LY6e8b9sea4oD9Zo8uCuTNFY623Se2zXqmujM5QAAABIEBuBO7HtNmUzPLD5ZU81bt00u76no8WoWSJue1yqXyaPn56HgnEp5JwVuqXNyt9n1bSJsPbvVQmqKvIUqgkLYpi6YVQumUSKYqmWpiqZSVaYumWpi6YyVpi2yzZRgFWUZLKgESMkTLLqgB6otzCEy6YAZLbahPbfq35qRmPHK7Svnt1EYerqvV7L5I0SwB8su7UrdvZLuzHeqmfi/RGd5cmbpK2nz26L6sRw7W65WlMJ9KVK30aa9COH82XPDtuuV83vNvbbr+uxXDw66b3alLz77/ACR1tDpJxbtbumtt36eiEbpQzRFGSKHRRnYuVtixqyGObLKyLF7bFkGTkMKsushNxPbb4hPiGNZCecXJ9J4hpcepxvHllUvJ9ql+svyZ8/4tw6tLk5K96X1x3tsqn+6PevIYeKaWdRieOuj7xXnNeTNMPScvbwZAzPhrHdRa2qXs/T5izVABEEgAWT26ro9+j80VBsA73D+KK0pyPa+yrsq/szoOzyUs6Gh17naLe89k33n/AEBNdt0UdC+ch0UlNMXTB0UbGSKZRslsW2AQ2UbJbKNgEMqSyoAuWXTE430GJiOw1MtuZqzJduoqsrfyDYmNaYzqZS7vYrz3k7dF+CF4+Vd+vzNE50B1fDpUvve9+huxrb4GSdQhs6hDS3Qx00YJ1KLrVIWj26M0NmjmLWoP+IInk9uurLKjlRxBDZ1qFyfToqy6swTqky61C9Rcntt8QnxDIsy9SfFQuT20PIUqxXOKzZlMun2lNv6D0NuJ7R5Iq55dnaTVtPy8k/j3OMP1eZ5Ldvu3uIZQiAABGlEBuABIIgADfoNVt7lPo/u/D4HQ5zgI6Omz8y6913+PxKlRlPtsdFWynMQ6KQlso2DZRsAlso2DZVgA2RuDZUQZIrYs7bEoGyNt9L0yu5UBHpfmDmKhuGxpfxGT4rF7gGy5hyzMPGYjcB7HMP8AGZHisTuSGxzDlmfqXWpfqZtw3DZcxtnWUvMZOvfqc7cNx9FxHWniLGzxI4u4bh0OHoI4j8TPxDiDteHL6ftfH4HJVsOYNlwYyjDcNxHICCSAMbgQSwADcCANJfHfK9/97FA3AtOjN+ZbmMmnvpt6DuYuVlZoxshspzBuMktlWwbK7iNO5BDZG4BiTJYAZuhAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAJ3ABgbkpgAEncncgAIAwAAEQAAEgAAForZmrcAKiMhuRuSBSEbkbgAGNyNwAQf/2Q==" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="guitar"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/guitar.jpeg" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="coding"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/coding2.jpeg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="travel"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="travel.jpeg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
      </div>
    </div>
  </div>
</div>




<section class="bg-white">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        
        <div class="flex justify-center mt-8 space-x-6">
            
            <a href="instagram.com/manask3003" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Instagram</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>
            </a>
            
            <a href="github.com/supermanas" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">GitHub</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
            </a>
            
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            With love made by manas kumar for codechef
        </p>
    </div>
</section>

    </main>
  )
}

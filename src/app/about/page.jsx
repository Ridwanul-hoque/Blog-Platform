export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Bloggers
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to <strong>Bloggers</strong> — a dynamic platform for all
              tech enthusiasts, developers, and curious minds to share their
              thoughts and expertise. Whether you're a beginner or an expert,
              if you're signed in, you're part of the community.
            </p>

            <p>
              This app empowers users to write blog posts, share tutorials,
              and engage in discussions about topics like web development,
              software engineering, programming languages, and more. Everyone
              has a voice here, and we encourage active participation.
            </p>

            <p>
              Bloggers is built using <strong>Next.js</strong> and{' '}
              <a
                href='https://go.clerk.com/fgJHKlt'
                target='_blank'
                className='text-teal-500 hover:underline'
              >
                Clerk
              </a>{' '}
              for seamless authentication and user experience.
            </p>

            <p>
              Engage with others by commenting, liking, and replying to posts.
              Our goal is to foster a welcoming space where developers can
              grow, learn, and support one another through shared knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

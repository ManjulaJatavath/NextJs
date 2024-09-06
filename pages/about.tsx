import Head from 'next/head';

const about = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center p-6">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us and our mission" />
      </Head>
      <div className=" bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 mb-4">
            We are a passionate team dedicated to providing the best services and solutions.
            Our mission is to deliver exceptional value to our customers through innovation
            and commitment to excellence.
          </p>
          <p className="text-gray-600 mb-4">
            Our team consists of experienced professionals with diverse backgrounds, each bringing
            a unique set of skills and expertise. We believe in fostering a collaborative and
            inclusive work environment where creativity and growth thrive.
          </p>
          <p className="text-gray-600">
            If you have any questions or would like to learn more about us, feel free to reach out!
          </p>
        </div>
    </div>
  )
}

export default about

import Head from 'next/head';

//Types
interface Props {
  title: string;
}

const Seo = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
export default Seo;

import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { IPostData } from '@/types/types';
import BackButton from '@/components/Buttons/BackButton';
import Layout from '@/components/Layout/Layout.component';
import { useEffect } from 'react';

export default function Post({ postData }: { postData: IPostData }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout maxWidth="max-w-xl">
      <BackButton className="fixed top-4 left-4 z-1000" href={'/#thoughts'} />

      <div className="px-4 mb-16">
        <div className='font-bold text-6xl mb-4 mt-12 sm:mt-4'>{postData.title}</div>
        <div className='italic'>{postData.date}</div>
        <div className='prose mt-12'>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;

  try {
    const postData = await getPostData(id);
    return {
      props: {
        postData,
      },
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

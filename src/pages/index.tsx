import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {

  const user = useUser();
  const { data } = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to T3!</h1>

        <section>
          {!user.isSignedIn ? <SignInButton /> : <SignOutButton />}

        </section>
        <section>
          {data?.map((post) => (
            <div key={post.id}>{post.content}</div>
          ))}

        </section>
      </main>
    </>
  );
};

export default Home;

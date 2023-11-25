import React from "react";
import "./Splash.css";

function Splash() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-1 flex items-center justify-center">
          <div className="p-4">
            <h2 className="text-3xl text-center font-bold text-gray-800 sm:text-4xl">
              Hi, I'm Colin
            </h2>
            <p className="mt-3 text-center text-xl text-gray-500 sm:mt-4">
              Software Engineer
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 p-4">
          <p>
            With two years of professional software engineering experience, I
            have developed software using a variety of technologies across the
            stack and have found that I learn quickly. I've used Java and PL/SQL
            for a set of applications for small business payments and invoicing.
            I used Go, Bash, HTML/CSS, TypeScript, React, and Tailwind to
            develop this site. I've built an interpreter for a custom
            programming language using Rust. I've built CI/CD pipelines with
            Jenkins and Github Workflows. I have experience with various AWS
            services such as IAM, RDS, S3, EC2, and Cloudfront. I'm familiar
            with many data technologies such as document databases (MongoDB and
            DynamoDB), wide column stores (BigTable), key-value stores (Redis
            and Memcached), and many open-source Apache tools for solving data
            problems like batching and streaming.
          </p>

          <p>
            I am interested in software domains such as compilers, database
            systems, and distributed computing. I also have a a lot of interest
            in system design and analyzing them through a lens of scalability,
            maintainability, and reliability. I have experience in agile and
            collaborating with cross-functional teams through my work. My
            resourcefulness, adaptability, problem-solving skills, and knowledge
            have helped me complete complex projects. As someone that loves
            learning new things, I constantly seek to expand my skills and
            knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Splash;

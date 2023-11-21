import React from "react";
import "./Splash.css";

function Splash() {
  return (
    <section className="container mx-auto bg-white rounded-md mt-14">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="p-2">
          <h1 className="font-semibold text-left text-4xl text-gray-800">
            Hi, I'm Colin
          </h1>
          <p>
            With about two years of experience as a software engineer, I have
            had the opportunity to develop, test, and maintain applications
            using technologies across the stack. I've used Go, Java, Spring,
            SQL, and PL/SQL for back end web services, middleware, and batch
            jobs. I've used HTML/CSS, TypeScript, Angular, React, and Tailwind
            to develop web pages. I've built CI/CD pipelines with Jenkins and
            Github Workflows. I've have experience with various AWS services
            such as RDS, S3, EC2, and Cloudfront. I'm familiar with many data
            technologies such as document based databases, wide column stores
            key value stores like Redis, stream processing, and batch
            processing.
          </p>

          <p>
            I am interested in software domains such as compilers, database
            systems, and distributed computing. I also have a strong interest in
            system design and analyzing them through a lens of scalability,
            maintainability, and reliability. I have experience in agile and
            collaborating with cross-functional teams through my work. My
            attention to detail, problem-solving skills, and commitment to
            excellence have helped me complete complex projects. As someone with
            a passion for education, I constantly seek to expand my skills and
            stay up-to-date with the latest trends in software development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Splash;

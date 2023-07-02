import React from 'react';
import Article from './Article';
import blogImage1 from './Images/blog-image-1.jpg';
import blogImage2 from './Images/blog-image-2.jpg';

function Main() {
  return (
    <main>
      <Article
        date="11/12/20"
        title="On the Street in Brooklyn"
        imageSrc={blogImage1}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa amet, cupiditate voluptatibus dignissimos consectetur nobis, blanditiis distinctio saepe debitis voluptates, impedit facilis autem. Repudiandae a praesentium iste vitae dolore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, odio asperiores, soluta molestiae et laboriosam aliquid error minus voluptatum, quod assumenda sint necessitatibus dolorum accusamus voluptas nisi cum repudiandae voluptates!Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quo, saepe eaque cum vero beatae qui, similique voluptate, optio facilis nihil expedita quaerat cupiditate inventore doloribus. Sit dolorum officiis doloremque."
      />
      <Article
        date="11/11/20"
        title="Vintage in Vogue"
        imageSrc={blogImage2}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa amet, cupiditate voluptatibus dignissimos consectetur nobis, blanditiis distinctio saepe debitis voluptates, impedit facilis autem. Repudiandae a praesentium iste vitae dolore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, odio asperiores, soluta molestiae et laboriosam aliquid error minus voluptatum, quod assumenda sint necessitatibus dolorum accusamus voluptas nisi cum repudiandae voluptates!Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quo, saepe eaque cum vero beatae qui, similique voluptate, optio facilis nihil expedita quaerat cupiditate inventore doloribus. Sit dolorum officiis doloremque."
      />
    </main>
  );
}

export default Main;

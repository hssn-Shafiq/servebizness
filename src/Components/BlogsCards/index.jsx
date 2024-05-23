export const BlogsCards = ({display}) => {
  return (
    <>
      <div className="blog-cards">
        <div className="container">
          <div className="card">
            <div className="card__header">
              <a href="/about">
                <img
                  src="https://source.unsplash.com/600x400/?computer"
                  alt="card__image"
                  className="card__image"
                  width={600}
                />
              </a>
            </div>
            <div className="card__body">
              <a href="/about">
                <span className="tag tag-blue">Business Writing</span>
              </a>
              <a href="/about">
                <h4>Mastering Business Writing</h4>
              </a>
              <p>
                In today's competitive business world, mastering the art of
                effective communication through writing is essential for
                success.
              </p>
            </div>
            <div className={`card__footer ${display}`}>
              <div className="user">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info">
                  <h5>Jane Doe</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <a href="/about">
                <img
                  src="/images/blog card-1.jpg"
                  alt="card__image"
                  className="card__image"
                  width={600}
                />
              </a>
            </div>
            <div className="card__body">
              <a href="/about">
                <span className="tag tag-brown">Content Writing</span>
              </a>
              <a href="/about">
                <h4>Crafting Compelling Content</h4>
              </a>
              <p>
                Crafting compelling content is essential in today's digital
                landscape. To succeed in content writing, focus on creating
                engaging content that resonates with your audience.
              </p>
            </div>
            <div className={`card__footer ${display}`}>
              <div className="user">
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info">
                  <h5>Jony Doe</h5>
                  <small>Yesterday</small>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <a href="/about">
                <img
                  src="/images/blog card-2.jpg"
                  alt="card__image"
                  className="card__image"
                  width={600}
                />
              </a>
            </div>
            <div className="card__body">
              <a href="/about">
                <span className="tag tag-red">Academic Writing</span>
              </a>
              <a href="/about">
                <h4>Excelling in Academic Writing</h4>
              </a>
              <p>
                Academic writing demands precision, clarity, and adherence to
                scholarly standards. To excel in this field, grasp the
                conventions of academic writing, including formatting styles
                like APA, MLA, or Chicago, and uphold principles of academic
                integrity.
              </p>
            </div>
            <div className={`card__footer ${display}`}>
              <div className="user">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info">
                  <h5>John Doe</h5>
                  <small>2d ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";

const Skills = () => {
  return (
    <div className="w-2/6 bg-white rounded-md p-4">
      <h3 className="gray_text_color mb-3">Skills Information</h3>
      <p className="text-sm mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde
        incidunt vel et porro, nostrum id illum voluptate dignissimos at numquam
        molestias nulla labore minima tempora natus reiciendis blanditiis
        itaque.
      </p>

      <div className="flex justify-between">
        <div>
          <h3 className="text-[15px] mb-1">Frontend</h3>
          <span className="block text-[13px] py-1">HTML</span>
          <span className="block text-[13px] py-1">CSS</span>
          <span className="block text-[13px] py-1">JavaScript</span>
          <span className="block text-[13px] py-1">React</span>
        </div>
        <div>
          <h3 className="text-[15px] mb-1">Freame Work</h3>
          <span className="block text-[13px] py-1">BootStrap</span>
          <span className="block text-[13px] py-1">Tailwind css</span>
          <span className="block text-[13px] py-1">Material UI</span>
          <span className="block text-[13px] py-1">Daiysi UI</span>
          <span className="block text-[13px] py-1">Redux</span>
        </div>
        <div>
          <h3 className="text-[15px] mb-1">Backend</h3>
          <span className="block text-[13px] py-1">Node js</span>
          <span className="block text-[13px] py-1">Express Js</span>
          <span className="block text-[13px] py-1">Mongodb</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;

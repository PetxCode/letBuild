import React from "react";
import Reverse from "./Reverse";
import code from "../../Peter/image/code.png";
import ide from "../../Peter/image/ide.jpg";
import imgPad from "../../Peter/image/imgPad.png";

const ReverseHolder = () => {
  return (
    <div>
      <Reverse
        title1="Guided learning"
        detail1="CodeLab's self-guided coding-for-kids software helps children
  learn to code at their own pace in a fun, interactive
  environment."
        title2="Built-in tutor"
        detail2="Step-by-step coding courses for kids teach kids how to apply coding concepts so they can complete each project."
        title3="Free play mode"
        detail3="After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        headerLine="The CodeLab Approach"
        detailLine="Individualized learning with built-in tutorials and hands-on projects."
        img={code}
      />

      <Reverse
        headerLine="Step-by-step success"
        detailLine="Lessons are designed to motivate kids to keep advancing their skills by leading them down a path to earning cool new badges. "
        chng
        title1="Interactive explanations"
        detail1="Cool characters introduce code blocks and how to use them."
        title2="How-to videos"
        detail2="Short clips demonstrate common actions such as deleting Actors or changing the background."
        title3="Mini-games"
        detail3="Preview the learn-to-code games for kids that you build in each lesson and play bonus games along the way."
        img={ide}
      />

      <Reverse
        headerLine="Limitless creativity"
        detailLine="Kids can quickly build whatever they imagine with our suite of intuitive creativity tools."
        title1="Independent game-building"
        detail1="Once they receive a prompt, kids create games and projects based on step-by-step instructions."
        title2="DIY Projects"
        detail2="Kids apply what they’ve learned to build their own unique games."
        title3="Easy to use"
        detail3="Drag-and-drop interface makes building games really easy. With over 200 visual blocks that snap into programs, kids can build even the most complex games with ease."
        img={imgPad}
      />
    </div>
  );
};

export default ReverseHolder;

# Apyzova Elnura 
## Frontend Developer and UX/UI Designer

![Elnura's photo](../cv/images/elyas-photo.jpg)

### Contact Information
- **Location:** Kyrgyzstan, Osh
- **Email:** elnura.apyzova.ch@gmail.com
- **Phone:** +996 224 03 45 45

### Projects
- [GitHub](https://github.com/ElyaApyzova)
- [Netlify](https://app.netlify.com/teams/elyaapyzova/sites)

### Profile
As a dedicated Frontend Developer, I possess a strong skill set in HTML, CSS, JavaScript, SASS, Git, Bootstrap, Redux, and React. Currently, I am expanding my expertise in TypeScript and Node.js. With experience in website creation and ongoing work on a medical website, I am a detail-oriented team player who consistently strives for excellence in my work.

### Skills
- HTML
- CSS
- JavaScript
- Sass
- Bootstrap
- React
- Redux
- TypeScript
- Git
- Node.js

### Code Solution
```javascript
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

var findMin = function(nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    
    let left = 0;
    let right = nums.length - 1;
    
    if (nums[right] > nums[0]) {
        return nums[0];
    }
    
    while (right >= left) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }
        if (nums[mid] > nums[0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return Number.MAX_VALUE;
};
```

### Work Experience
#### Front-End Developer
**From 2023 > Freelancer at Web Studio**
Lead the development of an online telemedicine platform, resulting in a 40% increase in patient engagement and a 25% increase in revenue. Developed responsive websites using HTML, CSS, JavaScript, React, and other frontend development languages. Collaborated with designers to create wireframes, prototypes, and mockups using Figma. Conducted user research studies and usability testing sessions to gather feedback and improve design iterations.

#### Front-End Developer
**From 2021 to 2022 > Projects by Demilge-Acadeti**
Developed responsive web designs using HTML, CSS, and JavaScript. Collaborated with clients to understand design requirements and implemented their ideas into website designs. Conducted user research and analysis to ensure optimal user experience.Built responsive websites using HTML, CSS, SCSS, JavaScript. Created educational and medical websites using Wix and WordPress. Worked closely with clients to understand their design requirements and implemented their ideas into website designs. Provided guidance and training to junior developers on the latest frontend development trends and best practices.

#### Experienced English Teacher
**From 2009 to 2023 > The Engineering College**
As an experienced English teacher, I have dedicated my career to fostering a positive and engaging learning environment for my students. With 15 years of experience, I have honed my skills in curriculum development, lesson planning, and instructional strategies to ensure effective and impactful teaching. I am highly proficient in creating tailored lesson plans that cater to the unique needs and abilities of my students. By incorporating a variety of teaching methods, such as interactive activities, multimedia resources, and real-life examples, I strive to make the learning process both enjoyable and effective.

### Education
> Front-End developer
> RS School
> 2024

> Front-End developer
> Jebesoft
> 2023

> Front-End developer
> UX UI Designer
> Jyldyz Academy
> 2021 - 2022

> Lingvist and Interpreter
> Osh State University
> Faculty of World languages
> 2005 - 2010

### Languages
- English
- Russian
- German
- Kyrgyz
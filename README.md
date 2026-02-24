১. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById() নির্দিষ্ট একটি id ব্যবহার করে একটি মাত্র element নির্বাচন করে এবং একটি element রিটার্ন করে।
getElementsByClassName() নির্দিষ্ট class নামের সবগুলো element নির্বাচন করে এবং একাধিক element (HTMLCollection) রিটার্ন করে।
অন্যদিকে querySelector() CSS selector ব্যবহার করে প্রথম matching element নির্বাচন করে এবং querySelectorAll() CSS selector ব্যবহার করে সব matching element নির্বাচন করে (NodeList আকারে)।

সংক্ষেপে, getElementById ও getElementsByClassName নির্দিষ্টভাবে id ও class ভিত্তিক কাজ করে, আর querySelector ও querySelectorAll বেশি ফ্লেক্সিবল কারণ এগুলো CSS selector ব্যবহার করতে পারে।


##########################################
##########################################

২. How do you create and insert a new element into the DOM?

নতুন element তৈরি করতে প্রথমে document.createElement() ব্যবহার করে element তৈরি করা হয়। এরপর সেই element-এ প্রয়োজনীয় content বা attribute যোগ করা হয়। সবশেষে appendChild() বা append() ব্যবহার করে সেটিকে DOM-এর নির্দিষ্ট জায়গায় যুক্ত করা হয়।

অর্থাৎ, তৈরি → কন্টেন্ট যোগ → DOM-এ সংযুক্ত — এই তিনটি ধাপে কাজটি সম্পন্ন হয়।


##########################################
##########################################


৩. What is Event Bubbling? And how does it work?

Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো child element-এ event ঘটলে সেই event ধাপে ধাপে তার parent, তারপর grandparent হয়ে document পর্যন্ত উপরের দিকে ছড়িয়ে যায়।

অর্থাৎ, একটি element-এ event ঘটলে সেটি শুধু সেই element-এই সীমাবদ্ধ থাকে না, বরং উপরের element-গুলোতেও প্রভাব ফেলতে পারে — এটিই Event Bubbling।


##########################################
##########################################



৪. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation হলো এমন একটি পদ্ধতি যেখানে একাধিক child element-এর জন্য আলাদা আলাদা event listener না বসিয়ে তাদের parent element-এ একটি event listener বসানো হয়।

এটি উপকারী কারণ এতে কম memory ব্যবহার হয়, performance ভালো থাকে এবং পরবর্তীতে নতুন child element যোগ করলেও আলাদা করে নতুন listener যোগ করতে হয় না।


##########################################
##########################################

<!-- ৫. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() ব্রাউজারের default আচরণ বন্ধ করে। যেমন, কোনো link-এ ক্লিক করলে সাধারণত অন্য পেজে চলে যায় — preventDefault() ব্যবহার করলে এই স্বাভাবিক আচরণ বন্ধ করা যায়।

অন্যদিকে stopPropagation() event-এর উপরের দিকে ছড়িয়ে যাওয়া (bubbling) বন্ধ করে। অর্থাৎ, child element-এ event ঘটলে সেটি parent-এ আর যাবে না।

সংক্ষেপে, preventDefault() ব্রাউজারের default কাজ বন্ধ করে, আর stopPropagation() event-এর ছড়িয়ে যাওয়া বন্ধ করে। -->

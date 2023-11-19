import React from "react";
import "../App.css";
import "../blogs.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../responsive.css";

export default function ReactDoc () {
    return (
        <div>
        <div class="container-fluid bg2">
        <Navbar/>
        <br/><br/><br/><br/>
        <div class="container">
            <h2>Artificial Intelligence Learning Guide</h2>
            <p>You might have seen plenty of roadmaps on AI. Most of those are quiet vast and learners get confused while trying to learn all of these concepts. In this blog, I've cut short all the key topics which would help learners to master the domain of Artificial Intelligence and see what roles require what all skills. I'll also be sharing resources which were useful during my learning phase.</p>
            <hr/>

            {/* Mathematics */}
            <h4>1. Mathematics</h4>
            <p>Mathematics is the key concept in Artificial Intelligence. You don't need to solve any mathematical problem unless you're studying for your university exam. While doing projects, all the mathematics runs at the backend of the software. So you just need to be aware of the following concepts.</p>
            <ul>
                <li><strong>Calculus:</strong> You need to have a basic understanding of Differentiation, Integration, Differential equation and Area Under Curve. All these concepts are useful while understanding the working of Neural Networks. Area Under Curve is an important estimation measure while solving Classifcation problems. We'll come across the terms Neural Networks and Classification later.</li>
                <li><strong>Linear Algebra:</strong> Useful in Machine Learning algorithms to perform operations such as matrix multiplication, vector multiplication to identify trends and patterns in the data.</li>
                <li><strong>Probability:</strong> The concepts of probability that you've studied upto your higher secondary, those concepts are enough for AI. Probability is useful in ML concepts such as Naive Bayes Classifier, Decision Trees, Markove models, etc.</li>
                <li><strong>Statistics:</strong> Perhaps the most important concept of mathematics, statistics is important in measuring the performance of machine learning models such as measures of dispersion, measures of center, graphical data.</li>
            </ul>
            <hr/>

            {/* Excel */}
            <h4>2. Excel</h4>
            <p>Excel is one of the key tools in data science which allows users to create data. Excel also provides users with sorting, filtering and summarizing data makiing it easy for data analysis tasks.</p>
            <p>Excel also contains built in functions to perform mathematical, data transforming and logical operations in a single command.</p>
            <p> Excel provides various data visualization tools to create charts, graphs, and other visual representations of data. These visualizations help analysts understand trends, patterns, and relationships within the data, making it easier to interpret and communicate insights.</p>
            <hr/>

            {/* Programming Language */}
            <h4>3. Programming Langauge</h4>
            <p>After learning mathematics, it is essential to have a knowledge of a programming language in artificial intelligence.</p>
            <p>You can learn Python, R or Scala language in Artificial Intelligence.</p>
            <p>Python language is usually preferrable as it has libraries which are useful in every domain such as machine learning, deep learning, natural language processing, computer vision and even web and app development! If you want to create a software or an application out of your AI product then Python is very useful since its libraries can integrate the application and the machine learning model.</p>
            <p>R language is another good option but it limits it applications only in the field of machine learning and deep learning. In most of the industries Python is preferred due to its versatility. R is not much used in other domains that I mentioned in Python as it's not well documented.</p>
            <hr/>

            {/* Data Science */}
            <h4>4. Data Science</h4>
            <img class="shrink-img mx-auto d-block" src={require("../assets/aiml.png")} />
            <br/>
            <p>Data Science is a domain that is common in all AI fields. It includes the following steps</p>
            <ul>
                <li><strong>Data gathering and preparation:</strong> It involves the factors (variables) that you need to consider while preparing the data for your project/business model. You can acquire the data from various sources such as books, journals, internet or as by your own as per your business knowledge. After collecting the data you need to prepare a dataset where you can store the data which can be further useful for your analysis.</li>
                <li><strong>Data Preprocessing:</strong> You need to preprocess/manipulate you data if there are any missing values, outliers (some data points are far away from other points) or categorical variables. Machine Learning algorithms can be applied only when we take care of these factors.</li>
                <li><strong>Data Visualization: </strong> Data visualization is used to identify patterns based on graphs and plots of various variables.</li>
                <li><strong>Data Analysis: </strong> The results that we obtain by visualizations and statistical measures is termed as Data Analysis. Data Analysis in itself is an industrial role and we'll be elaborating on the key skills required later.</li>
            </ul>
            <hr/>
            
            {/* Machine Learning */}
            <h4>5. Machine Learning</h4>
            <p>The most essential skill is to learn machine learning algorithms. Machine learning is a subset of artificial intelligence that trains the dataset and predicts values based on the trained dataset. There are three types of machine learning algorithms.</p>
            <ul>
                <li>
                    <strong>Supervised Learning:</strong> In supervised learning, the algorithm is trained on a labeled dataset, where each data point has a known output or target variable. There are two types of Supervised Learning:
                    <ol type="a">
                        <li>
                            <strong>Regression:</strong> Used for predicting continous values. The following regression algorithms will be enough for learning in bachelors.
                            <ol type="i">
                                <li>Linear Regression</li>
                                <li>L1 and L2 (Lasso and Ridge Regression)</li>
                            </ol>
                        </li>
                        <li>
                            <strong>Classification:</strong> Used for predicting a class of a variable. You need to learn the following classification algorithms.
                            <ol type="i">
                                <li>Logistic Regression</li>
                                <li>Naive Bayes Classifier</li>
                                <li>K-Nearest Neighbors</li>
                            </ol>    
                        </li>
                        <p>Some algorithms which are used in both classification and regression:
                        <ol type="i">
                            <li>Decision Trees</li>
                            <li>Ensemble Techniques: Bagging, Random Forest, Boosting</li> 
                            <li>Support Vector Machines</li>
                        </ol></p>     
                    </ol>
                </li>

                <li>
                    <strong>Unsupervised Learning:</strong> In unsupervised learning, the algorithm is trained on an unlabeled dataset, where the data points do not have any pre-assigned labels or categories. There are two algorithms you need to learn
                    <ol type="a">
                        <li>K-Means Clustering</li>
                        <li>Principal Component Analysis</li>
                    </ol>
                </li>

                <li>
                    <strong>Reinforcement Learning:</strong>   reinforcement learning, the algorithm interacts with an environment and learns through trial and error. The algorithm receives rewards or penalties for its actions, and it gradually learns to choose actions that maximize rewards and minimize penalties. <br/>This topic is usually indended for students pursuing masters and you need not learn it at bachelors level. 
                </li>
            </ul>     
            <hr/>

            {/* Deep Learning */}
            <h4>6. Deep Learning</h4>
            <p>Deep learning is a subset of machine learning that makes use of artificial neurons called neural networks that mimic the human behaviour. It is most commonly used for image datasets to identify the characteristics of images. The following concepts are must while learning deep learning.</p>
            <ul>
                <li>Artificial Neural Networks</li>
                <li>Convolutional Neural Networks</li>
            </ul>
            <hr/>

            {/* Natural Language Processing */}
            <h4>7. Natural Language Processing</h4>
            <p>Natural Language Processing is another subset of machine learning that combines the concepts of deep learning to enable computers to understand and generate human language.</p>
            <p>NLP makes use of the NLTK and the SpaCy libraries which offer a wide range of tools and functionalities for various NLP tasks, including text cleaning, tokenization, part-of-speech tagging, parsing, named entity recognition, and sentiment analysis.</p>
            <p>NLP is also useful for the creation of chatbots.</p>
            <hr/>

            {/* Computer Vision */}
            <h4>8. Computer Vision</h4>
            <p>Computer vision is an interdisciplinary field that focuses on enabling computers to understand and interpret visual data from digital images and videos. It seeks to replicate human visual capabilities, allowing computers to identify objects, track movements, and analyze scenes.</p>
            <p><strong>OpenCV</strong> library of python can be used for learning Computer Vision.</p>
            <hr/>

            {/* Business Intelligence */}
            <h4>9. Business Intelligence Tools</h4>
            <p>Business intelligence tools are software applications that collect, analyze, and visualize data to help businesses make better decisions. They are majorly used for creating charts, graphs, dashboards and generate reports that provide analysis of the key business metrics.</p>
            <p>Popular business intelligence tools include <strong>Power BI, Tableau, Google Data Studio.</strong> Learn any one of these to master business intelligence.</p>
            <hr/>

            {/* Big Data Analytics */}
            <h4>10. Big Data Analytics</h4>
            <p>Big Data Analytics should be placed way higher since it doesn't have much relation with machine learning but people usually prefer to learn it at the end by prioritizing machine learning concepts.</p>
            <p>The AI model is trained using Data. And if the data size is big, then you should know Big Data Tools to manage this huge amount of Data.</p>
            <p>Big companies like YouTube and Google are using recommendation systems to recommend something based on the previous search history, this is the blend of AI and Big Data.</p>
            <p><strong>Hadoop, Spark, MongoDB</strong> are some of the Big Data tools. You can learn any one of these.</p>    
            <br/>
            <p>That's all about learning Artificial Intelligence. Make sure you note down the concepts while learning and practice the concepts by building projects and products from the resources you learn. Also public datasets are available for projects and research on platforms such as <strong>Kaggle, UCI Machine Learning Repository, Datahub.io, etc</strong></p>
            <hr/>

            {/* Roles */}
            <h4>Roles</h4>
            <p>As mentioned earlier, we'll discuss about industrial roles in artificial intelligence and the skills required for each role.</p>
            <ul>
                <li><strong>AI Engineer:</strong> Programming Language, Data Analysis, Machine Learning, Deep Learning, Natural Language Processing, Big Data Analytics, Computer Vision</li>
                <li><strong>Data Scientist/Engineer:</strong> Programming Language, Data Analysis, Business Intelligence Tools, Machine Learning, Deep Learning, Natural Language Processing</li>
                <li><strong>Machine Learning Engineer:</strong> Programming Langauge, Data Analysis, Machine Learning, Deep Learning</li>
                <li><strong>Data Analyst:</strong> Programming Language, Database (SQL), Excel, Data Science, Business Intelligence Tools, Linear Regression</li>
                <li><strong>Business Analyst:</strong> Excel, Database (SQL) Business Intelligence Tools, Linear Regression</li>
                <li><strong>Big Data Engineer:</strong> Programming Language, Database (SQL), Excel, Big Data Analytics</li>
            </ul>
            <hr/>

            {/* Resources */}
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title text-center">Resources</h4>
                    <ul>
                        <li><a href="https://www.sololearn.com/learn/languages/python">Learn Python-</a>Sololearn</li>
                        <li><a href="https://www.udemy.com/course/data_science_a_to_z/learn/lecture/39478180?start=30#overview">Machine Learning and Deep Learning in Python and R-</a> Udemy</li>
                        <li><a href="https://www.w3schools.com/datascience/">Data Science Tutorial-</a>w3schools</li>
                        <li><a href="https://youtu.be/OQmDhwhj78Y?si=OZ2_jcZE_RgfyHn5">NLP in Python-</a>YouTube (Simplilearn)</li>
                        <li><a href="https://youtu.be/oXlwWbU8l2o?si=VLjMiTHY1lpuNjLw">Open CV with Python-</a>YouTube (freeCodeCamp)</li>
                        <li><a href="https://www.udemy.com/course/draft/4640300/learn/lecture/31814308?start=0#overview">Tableau A to Z: End to End Guide-</a>Udemy</li>
                        <li><a href="https://www.udacity.com/course/intro-to-hadoop-and-mapreduce--ud617?irclickid=zLBzhnUDtxyPWYjynIw7I3uQUkFX0P21qUZOzY0&irgwc=1&utm_source=affiliate&utm_medium=&aff=2406137&utm_term=&utm_campaign=__&utm_content=&adid=786224">Intro to Hadoop and MapReduce-</a>Udacity Free Course</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p>For any queries drop down a message at any of my social handles mentioned in the footer. Happy learning! :)</p>

        </div>
        <br/><br/><br/>
        </div>
        <div><Footer/></div>
        </div>
    )
}
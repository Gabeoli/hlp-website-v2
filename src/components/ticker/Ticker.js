import React, { Component } from 'react'
import Answer from './Answer'
import Question from './Question'
import NextAnswerBtn from './NextAnswerBtn'
import NextQuestionBtn from './NextQuestionBtn'


class Ticker extends Component {


    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            question: "",
            response: "",
            data: null
        };
      }
      

      componentDidMount(){
          this.getData();
      }

      // Fetch API
      getData = () => {
        fetch("https://hello-lamp-post-api.herokuapp.com/questions/random?location_id=10&locale=en")
        .then(res => res.json())
        .then(
            (result)=>{
                this.setState({
                    isLoaded: true,
                    data: result,
                    question: result.question.text.en,
                    response: result.responses[0].text
                });

                console.log(this.state.data)
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
            }
        )
      }

      nextResponse = () => {

      }



    render() {
        const {
            error,
            isLoaded,
            question,
            response
        } = this.state;

        if (error){
            return <div>Error: {error.message}</div>;
        }
        else if(!isLoaded){
            return <div>Loading...</div>;
        }else{
            return (
                <div>
                    <Question question={question}/>
                    <Answer answer={response}/>
                    <div className="btn-holder">
                        <NextQuestionBtn question={this.getData}/>
                        <NextAnswerBtn/>
                    </div>
                </div>
            )
        }
    }
}

export default Ticker
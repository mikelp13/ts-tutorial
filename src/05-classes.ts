type TAnimationState = "playing" | "paused";
type THttpState = "request" | "success" | "error";

class State<S> {
  private state: S;

  constructor(initialState: S){
    this.state = initialState
  }

  getState = () => {
    return this.state;
  };

  setState = (newState: S) => {
    this.state = newState;
  };
}

const animationState = new State<TAnimationState>('playing')
const httpState = new State<THttpState>('success')

export {};
import './Status.css';

import { Header } from '../../components/Header/Header';
import { Separator } from '../../components/Separator/Separator';
import { Tweet } from '../../components/Tweet/Tweet';

const answers = ['Concordo...', 'Olha, faz sentido', 'Parabéns pelo progresso'];

export function Status() {
	return (
		<main className="status">
			<Header title="Tweet" />

			<Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam rem beatae aliquam voluptatem delectus sapiente. Eaque, inventore numquam eligendi impedit corporis, fugit, vel dolores quidem et voluptas officia repellat!" />

			<Separator />

			<form className="answer-tweet-form">
				<label htmlFor="tweet">
					<img
						src="https://github.com/bernardobbm.png"
						alt="Bernardo Borges"
					/>

					<textarea
						id="tweet"
						placeholder="Tweet your answer"
					/>
				</label>

				<button type="submit">Answer</button>
			</form>

			{answers.map((answer) => {
				return (
					<Tweet
						key={answer}
						content={answer}
					/>
				);
			})}
		</main>
	);
}

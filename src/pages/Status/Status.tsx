import './Status.css';

import { Header } from '../../components/Header/Header';
import { Separator } from '../../components/Separator/Separator';
import { Tweet } from '../../components/Tweet/Tweet';
import { FormEvent, useState } from 'react';

export function Status() {
	const [newAnswer, setNewAnswer] = useState('');
	const [answers, setAnswers] = useState([
		'Concordo...',
		'Olha, faz sentido',
		'Parabéns pelo progresso',
	]);

	function createNewAnswer(event: FormEvent) {
		event.preventDefault();

		setAnswers([...answers, newAnswer]);
		setNewAnswer('');
	}

	return (
		<main className="status">
			<Header title="Tweet" />

			<Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam rem beatae aliquam voluptatem delectus sapiente. Eaque, inventore numquam eligendi impedit corporis, fugit, vel dolores quidem et voluptas officia repellat!" />

			<Separator />

			<form
				className="answer-tweet-form"
				onSubmit={createNewAnswer}
			>
				<label htmlFor="tweet">
					<img
						src="https://github.com/bernardobbm.png"
						alt="Bernardo Borges"
					/>

					<textarea
						id="tweet"
						placeholder="Tweet your answer"
						value={newAnswer}
						onChange={(event) => setNewAnswer(event.target.value)}
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

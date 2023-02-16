import './Timeline.css';
import { Tweet } from '../../components/Tweet/Tweet';
import { Header } from '../../components/Header/Header';
import { Separator } from '../../components/Separator/Separator';
import { FormEvent, KeyboardEvent, useState } from 'react';

let newTweet = '';

export function Timeline() {
	const [newTweet, setNewTweet] = useState('');
	const [tweets, setTweets] = useState(['Meu primeiro tweet', 'Teste', 'Deu certo tweetar!']);

	function createNewTweet(event: FormEvent) {
		event.preventDefault();

		setTweets([...tweets, newTweet]);
		setNewTweet('');
	}

	function handleHotkeySubmit(event: KeyboardEvent) {
		if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
			setTweets([...tweets, newTweet]);
			setNewTweet('');
		}
	}

	return (
		<main className="timeline">
			<Header title="Home" />

			<form
				className="new-tweet-form"
				onSubmit={createNewTweet}
			>
				<label htmlFor="tweet">
					<img
						src="https://github.com/bernardobbm.png"
						alt="Bernardo Borges"
					/>

					<textarea
						id="tweet"
						placeholder="What's happening?"
						value={newTweet}
						onChange={(event) => setNewTweet(event.target.value)}
						onKeyDown={handleHotkeySubmit}
					/>
				</label>

				<button type="submit">Tweet</button>
			</form>

			<Separator />

			{tweets.map((tweet) => {
				return (
					<Tweet
						key={tweet}
						content={tweet}
					/>
				);
			})}
		</main>
	);
}

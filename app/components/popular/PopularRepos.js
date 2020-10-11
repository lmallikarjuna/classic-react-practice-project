import React from "react";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from "react-icons/fa";

import LanguageNav from "./LanguagesNav";
import { fetchPopularRepos } from "../../utils/fetchPopularRepos.api";
import Card from "../card/Card";
import Tooltip from "../tooltip/Tooltip";
import Loading from "../loading/Loading";

export default class PopularRepos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: {},
      selectedLanguage: "All",
      loading: true,
    };
  }

  componentDidMount() {
    const { selectedLanguage } = this.state;
    fetchPopularRepos(selectedLanguage).then((data) =>
      this.setState({
        repos: { ...this.state.repos, [selectedLanguage]: data },
        loading: false,
      })
    );
  }

  handleUpdateLanguage(language) {
    this.setState({
      selectedLanguage: language,
    });
    if (!this.state.repos[language]) {
      this.setState({ loading: true });
      fetchPopularRepos(language).then((data) =>
        this.setState({
          repos: { ...this.state.repos, [language]: data },
          loading: false,
        })
      );
    }
  }

  render() {
    const { repos, selectedLanguage, loading } = this.state;
    console.log("Props");
    console.log(this.props);
    return (
      <React.Fragment>
        <LanguageNav
          selected={selectedLanguage}
          onUpdatedLanguage={(language) => this.handleUpdateLanguage(language)}
        />
        {loading ? (
          <Loading text="Fetching Repos" />
        ) : (
          <div className="cards-container">
            {repos[selectedLanguage] &&
              repos[selectedLanguage].map((repo, index) => (
                <Card
                  key={index}
                  header={`#${index + 1}`}
                  avatar_url={repo.owner.avatar_url}
                  href={repo.html_url}
                  username={repo.name}
                >
                  <ul className="card-list">
                    <Tooltip text="Github username" className="card-item">
                      <li>
                        <FaUser color="rgb(255, 191, 116)" size={22} />

                        <span>{repo.owner.login}</span>
                      </li>
                    </Tooltip>

                    <li className="card-item">
                      <FaStar color="rgb(255, 215, 0)" size={22} />
                      <span>
                        {repo.stargazers_count.toLocaleString()} stars
                      </span>
                    </li>
                    <li className="card-item">
                      <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
                      <span>{repo.forks.toLocaleString()} forks</span>
                    </li>
                    <li className="card-item">
                      <FaExclamationTriangle
                        color="rgb(241, 138, 147)"
                        size={22}
                      />
                      <span>{repo.open_issues.toLocaleString()} open</span>
                    </li>
                  </ul>
                </Card>
              ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}

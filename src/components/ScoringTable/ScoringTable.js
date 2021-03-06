import React from "react";
import "./ScoringTable.css"

const ScoringTable = () => {


    return (
        <div>
            <table id="scoringTable">
                <tbody>
                    <tr>
                        <td className="handName">ROYAL FLUSH</td>
                        <td >250</td>
                        <td >500</td>
                        <td >750</td>
                        <td >1000</td>
                        <td >4000</td>
                    </tr>
                    <tr>
                        <td className="handName">STRAIGHT FLUSH</td>
                        <td >50</td>
                        <td >100</td>
                        <td >150</td>
                        <td >200</td>
                        <td >250</td>
                    </tr>
                    <tr>
                        <td className="handName">FOUR OF A KIND</td>
                        <td >25</td>
                        <td >50</td>
                        <td >75</td>
                        <td >100</td>
                        <td >125</td>
                    </tr>
                    <tr>
                        <td className="handName">FULL HOUSE</td>
                        <td >9</td>
                        <td >18</td>
                        <td >27</td>
                        <td >36</td>
                        <td >45</td>
                    </tr>
                    <tr>
                        <td className="handName">FLUSH</td>
                        <td >6</td>
                        <td >12</td>
                        <td >18</td>
                        <td >24</td>
                        <td >30</td>
                    </tr>
                    <tr>
                        <td className="handName">STRAIGHT</td>
                        <td >4</td>
                        <td >8</td>
                        <td >12</td>
                        <td >26</td>
                        <td >20</td>
                    </tr>
                    <tr>
                        <td className="handName">THREE OF A KIND</td>
                        <td >3</td>
                        <td >6</td>
                        <td >9</td>
                        <td >12</td>
                        <td >15</td>
                    </tr>
                    <tr>
                        <td className="handName">TWO PAIR</td>
                        <td >2</td>
                        <td >4</td>
                        <td >6</td>
                        <td >8</td>
                        <td >10</td>
                    </tr>
                    <tr>
                        <td className="handName">JACKS OR BETTER</td>
                        <td >1</td>
                        <td >2</td>
                        <td >3</td>
                        <td >4</td>
                        <td >5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ScoringTable;